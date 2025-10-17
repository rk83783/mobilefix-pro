"""
Payment Models
"""
from django.db import models
from django.contrib.auth import get_user_model
from orders.models import Order

User = get_user_model()


class Payment(models.Model):
    """Payment Transaction"""
    
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    )
    
    PAYMENT_GATEWAY = (
        ('razorpay', 'Razorpay'),
        ('stripe', 'Stripe'),
        ('cod', 'Cash on Delivery'),
        ('upi', 'UPI'),
    )
    
    # Relations
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='payments')
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='payment', null=True, blank=True)
    
    # Payment Info
    transaction_id = models.CharField(max_length=255, unique=True)
    payment_gateway = models.CharField(max_length=20, choices=PAYMENT_GATEWAY)
    gateway_order_id = models.CharField(max_length=255, blank=True)  # Razorpay/Stripe order ID
    gateway_payment_id = models.CharField(max_length=255, blank=True)  # Actual payment ID
    gateway_signature = models.CharField(max_length=500, blank=True)  # For verification
    
    # Amount
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=3, default='INR')
    
    # Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    
    # Response
    gateway_response = models.JSONField(blank=True, null=True)  # Full gateway response
    error_message = models.TextField(blank=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['transaction_id']),
            models.Index(fields=['-created_at']),
        ]
    
    def __str__(self):
        return f"Payment {self.transaction_id} - {self.status}"
    
    def save(self, *args, **kwargs):
        if not self.transaction_id:
            import uuid
            self.transaction_id = f"PAY{uuid.uuid4().hex[:12].upper()}"
        super().save(*args, **kwargs)


class MembershipPayment(models.Model):
    """Membership Purchase Payment"""
    
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('refunded', 'Refunded'),
    )
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='membership_payments')
    transaction_id = models.CharField(max_length=255, unique=True)
    
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    
    gateway_response = models.JSONField(blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Membership Payment {self.transaction_id}"
