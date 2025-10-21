"""
Main API URLs
"""
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def api_root(request):
    """API Root - Welcome endpoint"""
    return Response({
        'message': 'Welcome to MobileFix Pro API',
        'version': '1.0',
        'endpoints': {
            'auth': '/api/auth/',
            'products': '/api/products/',
            'orders': '/api/orders/',
            'payments': '/api/payments/',
            'uploads': '/api/uploads/',
            'docs': {
                'swagger': '/swagger/',
                'redoc': '/redoc/',
            }
        }
    })


app_name = 'api'

urlpatterns = [
    path('', api_root, name='api-root'),
]