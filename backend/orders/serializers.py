"""
Order Serializers
"""
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Order, OrderItem
from products.serializers import ProductListSerializer

User = get_user_model()


class OrderItemSerializer(serializers.ModelSerializer):
    """Order item serializer"""
    product = ProductListSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = OrderItem
        fields = [
            'id', 'product', 'product_id', 'product_name', 'product_sku',
            'product_image', 'unit_price', 'quantity', 'total_price'
        ]
        read_only_fields = ['id', 'product_name', 'product_sku', 'product_image', 'total_price']


class OrderListSerializer(serializers.ModelSerializer):
    """Order list serializer (lightweight)"""
    
    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'total', 'order_status',
            'payment_status', 'created_at'
        ]
        read_only_fields = ['id', 'order_number', 'created_at']


class OrderDetailSerializer(serializers.ModelSerializer):
    """Order detail serializer (complete)"""
    items = OrderItemSerializer(many=True, read_only=True)
    user_email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'user', 'user_email',
            'shipping_name', 'shipping_email', 'shipping_phone',
            'shipping_address', 'shipping_city', 'shipping_state', 'shipping_pincode',
            'subtotal', 'tax', 'shipping_charge', 'discount', 'total',
            'order_status', 'payment_status', 'payment_method',
            'customer_notes', 'admin_notes', 'tracking_number',
            'items', 'created_at', 'updated_at', 'paid_at', 'shipped_at', 'delivered_at'
        ]
        read_only_fields = [
            'id', 'order_number', 'user', 'created_at', 'updated_at',
            'paid_at', 'shipped_at', 'delivered_at'
        ]


class OrderCreateSerializer(serializers.ModelSerializer):
    """Order creation serializer"""
    items = OrderItemSerializer(many=True)
    
    class Meta:
        model = Order
        fields = [
            'shipping_name', 'shipping_email', 'shipping_phone',
            'shipping_address', 'shipping_city', 'shipping_state', 'shipping_pincode',
            'subtotal', 'tax', 'shipping_charge', 'discount', 'total',
            'payment_method', 'customer_notes', 'items'
        ]
    
    def create(self, validated_data):
        """Create order with items"""
        items_data = validated_data.pop('items')
        user = self.context['request'].user
        
        # Create order
        order = Order.objects.create(user=user, **validated_data)
        
        # Create order items
        from products.models import Product
        for item_data in items_data:
            product = Product.objects.get(id=item_data['product_id'])
            OrderItem.objects.create(
                order=order,
                product=product,
                unit_price=item_data.get('unit_price', product.price),
                quantity=item_data['quantity']
            )
        
        return order
    
    def validate(self, data):
        """Validate order data"""
        if not data.get('items'):
            raise serializers.ValidationError({"items": "Order must have at least one item"})
        
        if data.get('total', 0) <= 0:
            raise serializers.ValidationError({"total": "Order total must be greater than zero"})
        
        return data


class OrderUpdateSerializer(serializers.ModelSerializer):
    """Order update serializer (admin only)"""
    
    class Meta:
        model = Order
        fields = [
            'order_status', 'payment_status', 'tracking_number', 'admin_notes'
        ]
