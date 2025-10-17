"""
Payment Views
"""
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.response import Response
from django.conf import settings
from django.utils import timezone
import razorpay
import stripe
import hashlib
import hmac

from .models import Payment, MembershipPayment
from .serializers import (
    PaymentSerializer, PaymentCreateSerializer,
    PaymentVerifySerializer, MembershipPaymentSerializer
)
from orders.models import Order


class PaymentViewSet(viewsets.ReadOnlyModelViewSet):
    """Payment history (read-only)"""
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        """Return payments for current user or all for admin"""
        user = self.request.user
        if user.is_staff:
            return Payment.objects.all()
        return Payment.objects.filter(user=user)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_razorpay_order(request):
    """Create Razorpay payment order"""
    serializer = PaymentCreateSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    
    amount = int(serializer.validated_data['amount'] * 100)  # Convert to paise
    currency = serializer.validated_data.get('currency', 'INR')
    order_id = serializer.validated_data.get('order_id')
    
    try:
        # Initialize Razorpay client
        client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
        
        # Create Razorpay order
        razorpay_order = client.order.create({
            'amount': amount,
            'currency': currency,
            'payment_capture': 1
        })
        
        # Get order if provided
        order = None
        if order_id:
            order = Order.objects.get(id=order_id, user=request.user)
        
        # Create payment record
        payment = Payment.objects.create(
            user=request.user,
            order=order,
            payment_gateway='razorpay',
            gateway_order_id=razorpay_order['id'],
            amount=serializer.validated_data['amount'],
            currency=currency,
            status='pending'
        )
        
        return Response({
            'order_id': razorpay_order['id'],
            'amount': razorpay_order['amount'],
            'currency': razorpay_order['currency'],
            'key_id': settings.RAZORPAY_KEY_ID,
            'payment_id': payment.id,
            'transaction_id': payment.transaction_id
        })
        
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def verify_razorpay_payment(request):
    """Verify Razorpay payment"""
    serializer = PaymentVerifySerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    
    payment_id = serializer.validated_data['payment_id']
    order_id = serializer.validated_data['order_id']
    signature = serializer.validated_data['signature']
    
    try:
        # Verify signature
        message = f"{order_id}|{payment_id}"
        generated_signature = hmac.new(
            settings.RAZORPAY_KEY_SECRET.encode(),
            message.encode(),
            hashlib.sha256
        ).hexdigest()
        
        if generated_signature != signature:
            return Response(
                {'error': 'Invalid signature'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Update payment
        payment = Payment.objects.get(gateway_order_id=order_id, user=request.user)
        payment.gateway_payment_id = payment_id
        payment.gateway_signature = signature
        payment.status = 'completed'
        payment.completed_at = timezone.now()
        payment.save()
        
        # Update order if exists
        if payment.order:
            payment.order.payment_status = 'paid'
            payment.order.paid_at = timezone.now()
            payment.order.order_status = 'confirmed'
            payment.order.save()
        
        return Response({
            'message': 'Payment verified successfully',
            'transaction_id': payment.transaction_id,
            'status': 'success'
        })
        
    except Payment.DoesNotExist:
        return Response(
            {'error': 'Payment not found'},
            status=status.HTTP_404_NOT_FOUND
        )
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_stripe_payment(request):
    """Create Stripe payment intent"""
    serializer = PaymentCreateSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    
    amount = int(serializer.validated_data['amount'] * 100)  # Convert to cents
    currency = serializer.validated_data.get('currency', 'inr')
    order_id = serializer.validated_data.get('order_id')
    
    try:
        # Initialize Stripe
        stripe.api_key = settings.STRIPE_SECRET_KEY
        
        # Create payment intent
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency=currency,
            metadata={'user_id': request.user.id, 'order_id': order_id}
        )
        
        # Get order if provided
        order = None
        if order_id:
            order = Order.objects.get(id=order_id, user=request.user)
        
        # Create payment record
        payment = Payment.objects.create(
            user=request.user,
            order=order,
            payment_gateway='stripe',
            gateway_order_id=intent.id,
            amount=serializer.validated_data['amount'],
            currency=currency,
            status='pending'
        )
        
        return Response({
            'client_secret': intent.client_secret,
            'payment_intent_id': intent.id,
            'public_key': settings.STRIPE_PUBLIC_KEY,
            'payment_id': payment.id,
            'transaction_id': payment.transaction_id
        })
        
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
def stripe_webhook(request):
    """Handle Stripe webhooks"""
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    
    try:
        # Verify webhook signature (you'll need to set STRIPE_WEBHOOK_SECRET)
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
        )
        
        # Handle payment_intent.succeeded event
        if event['type'] == 'payment_intent.succeeded':
            intent = event['data']['object']
            
            # Update payment
            payment = Payment.objects.get(gateway_order_id=intent.id)
            payment.gateway_payment_id = intent.id
            payment.status = 'completed'
            payment.completed_at = timezone.now()
            payment.save()
            
            # Update order
            if payment.order:
                payment.order.payment_status = 'paid'
                payment.order.paid_at = timezone.now()
                payment.order.order_status = 'confirmed'
                payment.order.save()
        
        return Response({'status': 'success'})
        
    except Exception as e:
        return Response(
            {'error': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def purchase_membership(request):
    """Purchase membership"""
    amount = 30  # Fixed membership price
    payment_method = request.data.get('payment_method', 'upi')
    
    # Create membership payment
    membership_payment = MembershipPayment.objects.create(
        user=request.user,
        amount=amount,
        payment_method=payment_method,
        status='pending'
    )
    
    # In production, integrate with payment gateway here
    # For now, mark as completed (demo)
    membership_payment.status = 'completed'
    membership_payment.completed_at = timezone.now()
    membership_payment.save()
    
    # Activate user membership
    request.user.activate_membership(duration_days=36500)  # Lifetime (100 years)
    
    return Response({
        'message': 'Membership purchased successfully',
        'transaction_id': membership_payment.transaction_id,
        'membership_id': request.user.membership_id
    })
