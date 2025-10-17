"""
Orders Admin Configuration
"""
from django.contrib import admin
from .models import Order, OrderItem


class OrderItemInline(admin.TabularInline):
    """Order items inline"""
    model = OrderItem
    extra = 0
    readonly_fields = ['product_name', 'product_sku', 'unit_price', 'quantity', 'total_price']
    can_delete = False


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """Order admin"""
    list_display = [
        'order_number', 'user', 'shipping_name', 'total',
        'order_status', 'payment_status', 'created_at'
    ]
    list_filter = ['order_status', 'payment_status', 'created_at', 'payment_method']
    search_fields = ['order_number', 'shipping_name', 'shipping_email', 'user__email']
    readonly_fields = ['order_number', 'created_at', 'updated_at', 'paid_at', 'shipped_at', 'delivered_at']
    inlines = [OrderItemInline]
    
    fieldsets = (
        ('Order Information', {
            'fields': ('order_number', 'user', 'created_at', 'updated_at')
        }),
        ('Shipping Details', {
            'fields': (
                'shipping_name', 'shipping_email', 'shipping_phone',
                'shipping_address', 'shipping_city', 'shipping_state', 'shipping_pincode'
            )
        }),
        ('Pricing', {
            'fields': ('subtotal', 'tax', 'shipping_charge', 'discount', 'total')
        }),
        ('Status', {
            'fields': ('order_status', 'payment_status', 'payment_method')
        }),
        ('Tracking', {
            'fields': ('tracking_number', 'paid_at', 'shipped_at', 'delivered_at')
        }),
        ('Notes', {
            'fields': ('customer_notes', 'admin_notes'),
            'classes': ('collapse',)
        }),
    )
    
    def has_delete_permission(self, request, obj=None):
        """Prevent deletion of orders"""
        return False


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    """Order item admin"""
    list_display = ['order', 'product_name', 'quantity', 'unit_price', 'total_price']
    list_filter = ['created_at']
    search_fields = ['product_name', 'product_sku', 'order__order_number']
    readonly_fields = ['created_at']
    
    def has_add_permission(self, request):
        """Order items created with orders"""
        return False
    
    def has_delete_permission(self, request, obj=None):
        """Prevent deletion"""
        return False
