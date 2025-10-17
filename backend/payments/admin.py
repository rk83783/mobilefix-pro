"""
Payments Admin Configuration
"""
from django.contrib import admin
from .models import Payment, MembershipPayment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    """Payment admin"""
    list_display = [
        'transaction_id', 'user', 'amount', 'payment_gateway',
        'status', 'created_at'
    ]
    list_filter = ['payment_gateway', 'status', 'created_at']
    search_fields = [
        'transaction_id', 'gateway_order_id', 'gateway_payment_id',
        'user__email'
    ]
    readonly_fields = [
        'transaction_id', 'created_at', 'updated_at', 'completed_at',
        'gateway_response'
    ]
    
    fieldsets = (
        ('Transaction Info', {
            'fields': ('transaction_id', 'user', 'order')
        }),
        ('Payment Details', {
            'fields': (
                'payment_gateway', 'gateway_order_id',
                'gateway_payment_id', 'gateway_signature'
            )
        }),
        ('Amount', {
            'fields': ('amount', 'currency')
        }),
        ('Status', {
            'fields': ('status', 'error_message')
        }),
        ('Response', {
            'fields': ('gateway_response',),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'completed_at')
        }),
    )
    
    def has_delete_permission(self, request, obj=None):
        """Prevent deletion"""
        return False


@admin.register(MembershipPayment)
class MembershipPaymentAdmin(admin.ModelAdmin):
    """Membership payment admin"""
    list_display = [
        'transaction_id', 'user', 'amount', 'payment_method',
        'status', 'created_at'
    ]
    list_filter = ['status', 'payment_method', 'created_at']
    search_fields = ['transaction_id', 'user__email']
    readonly_fields = ['transaction_id', 'created_at', 'completed_at', 'gateway_response']
    
    def has_delete_permission(self, request, obj=None):
        """Prevent deletion"""
        return False
