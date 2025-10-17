"""
Product Serializers
"""
from rest_framework import serializers
from .models import Category, Brand, Product


class CategorySerializer(serializers.ModelSerializer):
    """Category serializer"""
    
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'image', 'is_active', 'created_at']
        read_only_fields = ['id', 'slug', 'created_at']


class BrandSerializer(serializers.ModelSerializer):
    """Brand serializer"""
    
    class Meta:
        model = Brand
        fields = ['id', 'name', 'slug', 'logo', 'is_active']
        read_only_fields = ['id', 'slug']


class ProductListSerializer(serializers.ModelSerializer):
    """Product list serializer (lightweight)"""
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'sku', 'short_description',
            'category', 'brand', 'price', 'original_price', 
            'discount_percentage', 'stock', 'stock_status',
            'main_image', 'rating', 'review_count', 'is_featured'
        ]
        read_only_fields = ['id', 'slug']


class ProductDetailSerializer(serializers.ModelSerializer):
    """Product detail serializer (complete)"""
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    brand_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'sku', 'description', 'short_description',
            'category', 'category_id', 'brand', 'brand_id',
            'price', 'original_price', 'discount_percentage', 'discount_price',
            'stock', 'stock_status',
            'main_image', 'image_1', 'image_2', 'image_3',
            'compatibility', 'warranty', 'material', 'color',
            'meta_title', 'meta_description',
            'is_active', 'is_featured', 'rating', 'review_count',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'discount_price', 'created_at', 'updated_at']


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    """Product create/update serializer"""
    
    class Meta:
        model = Product
        fields = [
            'name', 'sku', 'description', 'short_description',
            'category', 'brand',
            'price', 'original_price', 'discount_percentage',
            'stock', 'stock_status',
            'main_image', 'image_1', 'image_2', 'image_3',
            'compatibility', 'warranty', 'material', 'color',
            'meta_title', 'meta_description',
            'is_active', 'is_featured'
        ]
    
    def validate_sku(self, value):
        """Validate SKU uniqueness"""
        instance = self.instance
        if instance and Product.objects.exclude(pk=instance.pk).filter(sku=value).exists():
            raise serializers.ValidationError("Product with this SKU already exists.")
        elif not instance and Product.objects.filter(sku=value).exists():
            raise serializers.ValidationError("Product with this SKU already exists.")
        return value
    
    def validate(self, data):
        """Validate product data"""
        if data.get('price', 0) < 0:
            raise serializers.ValidationError({"price": "Price cannot be negative"})
        
        if data.get('stock', 0) < 0:
            raise serializers.ValidationError({"stock": "Stock cannot be negative"})
        
        if data.get('discount_percentage', 0) < 0 or data.get('discount_percentage', 0) > 100:
            raise serializers.ValidationError({"discount_percentage": "Discount must be between 0 and 100"})
        
        return data
