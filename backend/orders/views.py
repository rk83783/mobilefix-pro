"""
Order Views
"""
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import Order, OrderItem
from .serializers import (
    OrderListSerializer, OrderDetailSerializer,
    OrderCreateSerializer, OrderUpdateSerializer
)


class IsOrderOwnerOrAdmin(permissions.BasePermission):
    """Custom permission: order owner or admin"""
    
    def has_object_permission(self, request, view, obj):
        # Admin can do anything
        if request.user.is_staff:
            return True
        # Owner can view their own orders
        return obj.user == request.user


class OrderViewSet(viewsets.ModelViewSet):
    """Order CRUD operations"""
    permission_classes = [permissions.IsAuthenticated, IsOrderOwnerOrAdmin]
    
    def get_queryset(self):
        """Return orders for current user or all for admin"""
        user = self.request.user
        if user.is_staff:
            return Order.objects.all().prefetch_related('items__product')
        return Order.objects.filter(user=user).prefetch_related('items__product')
    
    def get_serializer_class(self):
        """Return appropriate serializer"""
        if self.action == 'list':
            return OrderListSerializer
        elif self.action == 'create':
            return OrderCreateSerializer
        elif self.action in ['update', 'partial_update']:
            return OrderUpdateSerializer
        return OrderDetailSerializer
    
    def get_permissions(self):
        """Admin required for update/delete"""
        if self.action in ['update', 'partial_update', 'destroy']:
            return [permissions.IsAdminUser()]
        return [permissions.IsAuthenticated()]
    
    def create(self, request, *args, **kwargs):
        """Create new order"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        
        # Return detailed order info
        detail_serializer = OrderDetailSerializer(order)
        return Response(detail_serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        """Cancel order (customer can cancel pending/confirmed orders)"""
        order = self.get_object()
        
        if order.order_status in ['delivered', 'cancelled']:
            return Response(
                {'error': f'Cannot cancel {order.order_status} order'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        order.order_status = 'cancelled'
        order.save()
        
        return Response({'message': 'Order cancelled successfully'})
    
    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        """Update order status (admin only)"""
        order = self.get_object()
        new_status = request.data.get('status')
        
        valid_statuses = dict(Order.STATUS_CHOICES).keys()
        if new_status not in valid_statuses:
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        old_status = order.order_status
        order.order_status = new_status
        
        # Update timestamps
        if new_status == 'shipped' and not order.shipped_at:
            order.shipped_at = timezone.now()
        elif new_status == 'delivered' and not order.delivered_at:
            order.delivered_at = timezone.now()
        
        order.save()
        
        return Response({
            'message': 'Order status updated',
            'old_status': old_status,
            'new_status': new_status
        })
    
    @action(detail=True, methods=['post'])
    def update_payment_status(self, request, pk=None):
        """Update payment status (admin only)"""
        order = self.get_object()
        new_status = request.data.get('status')
        
        valid_statuses = dict(Order.PAYMENT_STATUS).keys()
        if new_status not in valid_statuses:
            return Response(
                {'error': 'Invalid payment status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        old_status = order.payment_status
        order.payment_status = new_status
        
        if new_status == 'paid' and not order.paid_at:
            order.paid_at = timezone.now()
        
        order.save()
        
        return Response({
            'message': 'Payment status updated',
            'old_status': old_status,
            'new_status': new_status
        })
    
    @action(detail=True, methods=['post'])
    def add_tracking(self, request, pk=None):
        """Add tracking number (admin only)"""
        order = self.get_object()
        tracking_number = request.data.get('tracking_number')
        
        if not tracking_number:
            return Response(
                {'error': 'Tracking number required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        order.tracking_number = tracking_number
        if order.order_status == 'confirmed':
            order.order_status = 'shipped'
            order.shipped_at = timezone.now()
        
        order.save()
        
        return Response({
            'message': 'Tracking number added',
            'tracking_number': tracking_number
        })
