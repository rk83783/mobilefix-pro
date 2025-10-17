"""
Custom User Model for MobileFix Pro
"""
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone


class UserManager(BaseUserManager):
    """Custom user manager for email-based authentication"""
    
    def create_user(self, email, password=None, **extra_fields):
        """Create and return a regular user"""
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        """Create and return a superuser"""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Custom User model with email as username"""
    
    username = None  # Remove username field
    email = models.EmailField('Email Address', unique=True)
    phone = models.CharField('Phone Number', max_length=15, blank=True, null=True)
    
    # Profile Fields
    full_name = models.CharField('Full Name', max_length=255, blank=True)
    avatar = models.ImageField('Profile Picture', upload_to='avatars/', blank=True, null=True)
    address = models.TextField('Address', blank=True)
    city = models.CharField('City', max_length=100, blank=True)
    state = models.CharField('State', max_length=100, blank=True)
    pincode = models.CharField('PIN Code', max_length=10, blank=True)
    
    # Business Fields
    is_membership_active = models.BooleanField('Membership Active', default=False)
    membership_id = models.CharField('Membership ID', max_length=20, blank=True, null=True)
    membership_start_date = models.DateTimeField('Membership Start', blank=True, null=True)
    membership_end_date = models.DateTimeField('Membership End', blank=True, null=True)
    
    # Timestamps
    created_at = models.DateTimeField('Created At', auto_now_add=True)
    updated_at = models.DateTimeField('Updated At', auto_now=True)
    last_login_ip = models.GenericIPAddressField('Last Login IP', blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = UserManager()
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        ordering = ['-created_at']
    
    def __str__(self):
        return self.email
    
    def get_full_name(self):
        """Return full name or email"""
        return self.full_name or self.email
    
    def activate_membership(self, duration_days=None):
        """Activate user membership"""
        self.is_membership_active = True
        self.membership_start_date = timezone.now()
        if duration_days:
            from datetime import timedelta
            self.membership_end_date = timezone.now() + timedelta(days=duration_days)
        self.save()
    
    @property
    def is_membership_valid(self):
        """Check if membership is currently valid"""
        if not self.is_membership_active:
            return False
        if self.membership_end_date and self.membership_end_date < timezone.now():
            return False
        return True
