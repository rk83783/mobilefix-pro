"""
Product Views
"""
from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Brand, Product
from .serializers import (
    CategorySerializer, BrandSerializer,
    ProductListSerializer, ProductDetailSerializer,
    ProductCreateUpdateSerializer
)


class CategoryViewSet(viewsets.ModelViewSet):
    """Category CRUD operations"""
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_permissions(self):
        """Admin only for create, update, delete"""
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]


class BrandViewSet(viewsets.ModelViewSet):
    """Brand CRUD operations"""
    queryset = Brand.objects.filter(is_active=True)
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    
    def get_permissions(self):
        """Admin only for create, update, delete"""
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]


class ProductViewSet(viewsets.ModelViewSet):
    """Product CRUD operations with search and filters"""
    queryset = Product.objects.filter(is_active=True).select_related('category', 'brand')
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'brand', 'stock_status', 'is_featured']
    search_fields = ['name', 'description', 'sku', 'compatibility']
    ordering_fields = ['price', 'created_at', 'rating', 'name']
    ordering = ['-created_at']
    lookup_field = 'slug'
    
    def get_serializer_class(self):
        """Return appropriate serializer"""
        if self.action == 'list':
            return ProductListSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        return ProductDetailSerializer
    
    def get_permissions(self):
        """Admin only for create, update, delete"""
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]
    
    def get_queryset(self):
        """Filter products based on query params"""
        queryset = super().get_queryset()
        
        # Price range filter
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        
        # Stock filter
        in_stock = self.request.query_params.get('in_stock')
        if in_stock and in_stock.lower() == 'true':
            queryset = queryset.filter(stock__gt=0)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured products"""
        featured = self.queryset.filter(is_featured=True)[:10]
        serializer = ProductListSerializer(featured, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """Advanced search"""
        query = request.query_params.get('q', '')
        
        if not query:
            return Response({'error': 'Search query required'}, status=status.HTTP_400_BAD_REQUEST)
        
        results = self.queryset.filter(
            name__icontains=query
        ) | self.queryset.filter(
            description__icontains=query
        ) | self.queryset.filter(
            compatibility__icontains=query
        )
        
        serializer = ProductListSerializer(results[:20], many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def update_stock(self, request, slug=None):
        """Update product stock (admin only)"""
        product = self.get_object()
        stock = request.data.get('stock')
        
        if stock is None:
            return Response({'error': 'Stock value required'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            stock = int(stock)
            if stock < 0:
                return Response({'error': 'Stock cannot be negative'}, status=status.HTTP_400_BAD_REQUEST)
            
            product.stock = stock
            if stock == 0:
                product.stock_status = 'out_of_stock'
            elif stock < 10:
                product.stock_status = 'limited'
            else:
                product.stock_status = 'in_stock'
            
            product.save()
            
            return Response({
                'message': 'Stock updated successfully',
                'stock': product.stock,
                'stock_status': product.stock_status
            })
        
        except ValueError:
            return Response({'error': 'Invalid stock value'}, status=status.HTTP_400_BAD_REQUEST)
