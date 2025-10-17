"""
Products Admin Configuration
"""
from django.contrib import admin
from .models import Category, Brand, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    """Category admin"""
    list_display = ['name', 'slug', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ['created_at']


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    """Brand admin"""
    list_display = ['name', 'slug', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """Product admin"""
    list_display = ['name', 'sku', 'category', 'brand', 'price', 'stock', 'stock_status', 'is_active', 'is_featured']
    list_filter = ['category', 'brand', 'stock_status', 'is_active', 'is_featured', 'created_at']
    search_fields = ['name', 'sku', 'description', 'compatibility']
    prepopulated_fields = {'slug': ('name',)}
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'slug', 'sku', 'description', 'short_description')
        }),
        ('Classification', {
            'fields': ('category', 'brand')
        }),
        ('Pricing', {
            'fields': ('price', 'original_price', 'discount_percentage')
        }),
        ('Stock', {
            'fields': ('stock', 'stock_status')
        }),
        ('Images', {
            'fields': ('main_image', 'image_1', 'image_2', 'image_3')
        }),
        ('Specifications', {
            'fields': ('compatibility', 'warranty', 'material', 'color')
        }),
        ('SEO', {
            'fields': ('meta_title', 'meta_description'),
            'classes': ('collapse',)
        }),
        ('Status', {
            'fields': ('is_active', 'is_featured', 'rating', 'review_count')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
