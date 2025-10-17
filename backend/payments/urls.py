"""
Payments URLs
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PaymentViewSet, create_razorpay_order, verify_razorpay_payment,
    create_stripe_payment, stripe_webhook, purchase_membership
)

app_name = 'payments'

router = DefaultRouter()
router.register(r'history', PaymentViewSet, basename='payment')

urlpatterns = [
    # Razorpay
    path('razorpay/create/', create_razorpay_order, name='razorpay-create'),
    path('razorpay/verify/', verify_razorpay_payment, name='razorpay-verify'),
    
    # Stripe
    path('stripe/create/', create_stripe_payment, name='stripe-create'),
    path('stripe/webhook/', stripe_webhook, name='stripe-webhook'),
    
    # Membership
    path('membership/purchase/', purchase_membership, name='membership-purchase'),
    
    # Payment history
    path('', include(router.urls)),
]
