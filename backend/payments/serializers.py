"""
Payment Serializers
"""
from rest_framework import serializers
from .models import Payment, MembershipPayment


class PaymentSerializer(serializers.ModelSerializer):
    """Payment serializer"""
    user_email = serializers.EmailField(source='user.email', read_only=True)
    order_number = serializers.CharField(source='order.order_number', read_only=True)
    
    class Meta:
        model = Payment
        fields = [
            'id', 'user', 'user_email', 'order', 'order_number',
            'transaction_id', 'payment_gateway', 'gateway_order_id',
            'gateway_payment_id', 'gateway_signature',
            'amount', 'currency', 'status', 'error_message',
            'created_at', 'completed_at'
        ]
        read_only_fields = [
            'id', 'user', 'transaction_id', 'created_at', 'completed_at'
        ]


class PaymentCreateSerializer(serializers.Serializer):
    """Create payment order"""
    amount = serializers.DecimalField(max_digits=10, decimal_places=2, min_value=1)
    currency = serializers.CharField(default='INR', max_length=3)
    payment_gateway = serializers.ChoiceField(choices=['razorpay', 'stripe'])
    order_id = serializers.IntegerField(required=False)
    
    def validate_amount(self, value):
        """Validate amount"""
        if value <= 0:
            raise serializers.ValidationError("Amount must be greater than zero")
        return value


class PaymentVerifySerializer(serializers.Serializer):
    """Verify payment"""
    payment_id = serializers.CharField()
    order_id = serializers.CharField()
    signature = serializers.CharField()


class MembershipPaymentSerializer(serializers.ModelSerializer):
    """Membership payment serializer"""
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = MembershipPayment
        fields = [
            'id', 'user', 'user_email', 'transaction_id',
            'amount', 'payment_method', 'status',
            'created_at', 'completed_at'
        ]
        read_only_fields = ['id', 'user', 'transaction_id', 'created_at', 'completed_at']
