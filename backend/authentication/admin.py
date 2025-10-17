"""
Admin configuration for authentication app
"""
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    """Custom admin for User model"""
    
    list_display = ['email', 'full_name', 'phone', 'is_membership_active', 'is_staff', 'created_at']
    list_filter = ['is_staff', 'is_superuser', 'is_active', 'is_membership_active']
    search_fields = ['email', 'full_name', 'phone']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Login Info', {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('full_name', 'phone', 'avatar')}),
        ('Address', {'fields': ('address', 'city', 'state', 'pincode')}),
        ('Membership', {'fields': ('is_membership_active', 'membership_id', 
                                    'membership_start_date', 'membership_end_date')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 
                                     'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'created_at', 'updated_at')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'full_name', 'phone'),
        }),
    )
    
    readonly_fields = ['created_at', 'updated_at']
