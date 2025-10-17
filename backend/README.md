# MobileFix Pro - Django Backend

A comprehensive Django REST API backend for the MobileFix Pro mobile repair platform.

## 🚀 Features

- ✅ **User Authentication** - JWT-based login/register system
- ✅ **Product Management** - Full CRUD operations for products
- ✅ **File Uploads** - Photo and PDF upload with validation
- ✅ **Order Management** - Complete order processing system
- ✅ **Payment Integration** - Razorpay & Stripe support
- ✅ **Admin Dashboard** - Django admin with custom views
- ✅ **REST API** - Complete RESTful API with Swagger docs
- ✅ **CORS Enabled** - Ready for frontend integration

## 📋 Requirements

- Python 3.8+
- PostgreSQL 12+ (or SQLite for development)
- Redis (for Celery tasks)

## 🛠️ Installation

### 1. Create Virtual Environment

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Environment Configuration

Create a `.env` file in the backend directory:

```env
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (SQLite for development)
DATABASE_URL=sqlite:///db.sqlite3

# For PostgreSQL (Production)
# DATABASE_URL=postgresql://user:password@localhost:5432/mobilefix_db

# JWT Settings
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ALGORITHM=HS256
JWT_EXPIRATION_HOURS=24

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# File Upload
MAX_UPLOAD_SIZE=10485760  # 10MB
ALLOWED_IMAGE_TYPES=jpg,jpeg,png,gif,webp
ALLOWED_DOCUMENT_TYPES=pdf,doc,docx

# Email Configuration
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:8080,http://127.0.0.1:8080
```

### 4. Database Setup

```bash
# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

### 5. Start Development Server

```bash
python manage.py runserver
```

The API will be available at: `http://localhost:8000/api/`

## 📁 Project Structure

```
backend/
├── mobilefix_backend/          # Main project directory
│   ├── settings.py             # Django settings
│   ├── urls.py                 # URL configuration
│   ├── wsgi.py                 # WSGI config
│   └── asgi.py                 # ASGI config
├── api/                        # Main API app
│   ├── models.py               # Database models
│   ├── serializers.py          # DRF serializers
│   ├── views.py                # API views
│   ├── urls.py                 # API routes
│   └── permissions.py          # Custom permissions
├── authentication/             # Auth app
│   ├── models.py               # User model
│   ├── serializers.py          # Auth serializers
│   ├── views.py                # Login/Register views
│   └── urls.py                 # Auth routes
├── products/                   # Products app
│   ├── models.py               # Product models
│   ├── serializers.py          # Product serializers
│   ├── views.py                # Product CRUD
│   └── urls.py                 # Product routes
├── orders/                     # Orders app
│   ├── models.py               # Order models
│   ├── serializers.py          # Order serializers
│   ├── views.py                # Order management
│   └── urls.py                 # Order routes
├── payments/                   # Payments app
│   ├── models.py               # Payment models
│   ├── views.py                # Payment processing
│   ├── razorpay_handler.py     # Razorpay integration
│   └── stripe_handler.py       # Stripe integration
├── uploads/                    # File uploads app
│   ├── models.py               # Upload models
│   ├── views.py                # Upload handlers
│   └── validators.py           # File validators
├── media/                      # Uploaded files
│   ├── products/               # Product images
│   ├── documents/              # PDF documents
│   └── avatars/                # User avatars
├── static/                     # Static files
├── requirements.txt            # Dependencies
├── manage.py                   # Django management
└── README.md                   # This file
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register/          - User registration
POST   /api/auth/login/             - User login
POST   /api/auth/logout/            - User logout
POST   /api/auth/refresh/           - Refresh JWT token
GET    /api/auth/profile/           - Get user profile
PUT    /api/auth/profile/           - Update profile
POST   /api/auth/change-password/   - Change password
```

### Products
```
GET    /api/products/               - List all products
POST   /api/products/               - Create product (admin)
GET    /api/products/{id}/          - Get product details
PUT    /api/products/{id}/          - Update product (admin)
DELETE /api/products/{id}/          - Delete product (admin)
GET    /api/products/search/        - Search products
GET    /api/products/categories/    - List categories
```

### Orders
```
GET    /api/orders/                 - List user orders
POST   /api/orders/                 - Create order
GET    /api/orders/{id}/            - Get order details
PUT    /api/orders/{id}/            - Update order status
DELETE /api/orders/{id}/            - Cancel order
```

### Payments
```
POST   /api/payments/razorpay/create/   - Create Razorpay order
POST   /api/payments/razorpay/verify/   - Verify payment
POST   /api/payments/stripe/create/     - Create Stripe payment
POST   /api/payments/stripe/webhook/    - Stripe webhook
GET    /api/payments/history/           - Payment history
```

### File Uploads
```
POST   /api/uploads/image/          - Upload image
POST   /api/uploads/document/       - Upload PDF/document
GET    /api/uploads/                - List uploads
DELETE /api/uploads/{id}/           - Delete upload
```

### Admin
```
GET    /api/admin/dashboard/        - Dashboard stats
GET    /api/admin/users/            - Manage users
GET    /api/admin/orders/           - Manage all orders
GET    /api/admin/analytics/        - Analytics data
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication.

### Getting a Token

```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

Response:
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

### Using the Token

```bash
curl -X GET http://localhost:8000/api/products/ \
  -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc..."
```

## 💳 Payment Integration

### Razorpay Setup

1. Sign up at [Razorpay](https://razorpay.com/)
2. Get your API keys from dashboard
3. Add keys to `.env` file
4. Test with provided test cards

### Stripe Setup

1. Sign up at [Stripe](https://stripe.com/)
2. Get your API keys
3. Add keys to `.env` file
4. Use test mode for development

## 📤 File Uploads

### Image Upload Example

```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);
formData.append('category', 'product');

fetch('http://localhost:8000/api/uploads/image/', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token
  },
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

### Validation Rules

- **Images**: JPG, PNG, GIF, WEBP (max 10MB)
- **Documents**: PDF, DOC, DOCX (max 10MB)
- **Virus scanning**: Enabled in production

## 🧪 Testing

```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test api
python manage.py test authentication

# Coverage report
coverage run --source='.' manage.py test
coverage report
```

## 🚀 Deployment

### Using Gunicorn

```bash
gunicorn mobilefix_backend.wsgi:application --bind 0.0.0.0:8000
```

### Environment Variables

Set `DEBUG=False` and configure:
- `ALLOWED_HOSTS`
- `DATABASE_URL` (PostgreSQL)
- `SECRET_KEY` (generate new)
- Payment gateway keys (production)

### Static Files

```bash
python manage.py collectstatic
```

## 📊 Admin Panel

Access Django admin at: `http://localhost:8000/admin/`

Features:
- User management
- Product CRUD
- Order tracking
- Payment history
- Upload management
- Site analytics

## 🔧 Development

### Create New App

```bash
python manage.py startapp app_name
```

### Make Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Create Superuser

```bash
python manage.py createsuperuser
```

## 📝 API Documentation

Interactive API docs available at:
- **Swagger UI**: `http://localhost:8000/swagger/`
- **ReDoc**: `http://localhost:8000/redoc/`

## 🐛 Troubleshooting

### CORS Issues
- Check `CORS_ALLOWED_ORIGINS` in settings
- Ensure frontend URL is whitelisted

### File Upload Errors
- Check `MEDIA_ROOT` permissions
- Verify file size limits
- Check allowed file types

### Payment Failures
- Verify API keys are correct
- Check webhook URLs
- Review payment gateway logs

## 📞 Support

- **GitHub**: https://github.com/rk83783/mobilefix-pro
- **Email**: support@mobilefixpro.com

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Django REST Framework
- Razorpay & Stripe
- All contributors

---

**Built with ❤️ for MobileFix Pro**
