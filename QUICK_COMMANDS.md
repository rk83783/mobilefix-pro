# ⚡ Quick Commands Reference

## 🚀 **START HERE - First Time Setup**

```powershell
cd c:\Users\Rakesh\.cursor\mobile-repair-website\backend
.\setup.ps1
```

---

## 📅 **Daily Use - Start Backend**

```powershell
cd c:\Users\Rakesh\.cursor\mobile-repair-website\backend
.\venv\Scripts\activate
python manage.py runserver
```

**Backend runs at:** http://127.0.0.1:8000

---

## 🌐 **Access Points**

| What | URL |
|------|-----|
| **API Root** | http://127.0.0.1:8000/api/ |
| **Admin Panel** | http://127.0.0.1:8000/admin/ |
| **Swagger Docs** | http://127.0.0.1:8000/swagger/ |
| **ReDoc** | http://127.0.0.1:8000/redoc/ |
| **Frontend** | Open `index.html` in browser |

---

## 🔑 **Common Commands**

### **Server**
```powershell
# Start server
python manage.py runserver

# Start on different port
python manage.py runserver 8080

# Stop server
Ctrl + C
```

### **Database**
```powershell
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Reset database (WARNING: deletes all data)
python manage.py flush

# Open Django shell
python manage.py shell
```

### **Users**
```powershell
# Create superuser
python manage.py createsuperuser

# Change password
python manage.py changepassword username
```

### **Static Files**
```powershell
# Collect static files (for production)
python manage.py collectstatic
```

---

## 🧪 **Test API Endpoints**

### **Register User**
```bash
POST http://127.0.0.1:8000/api/auth/register/
{
  "email": "test@example.com",
  "password": "TestPass123!",
  "password_confirm": "TestPass123!",
  "full_name": "Test User",
  "phone": "+919876543210"
}
```

### **Login**
```bash
POST http://127.0.0.1:8000/api/auth/login/
{
  "email": "test@example.com",
  "password": "TestPass123!"
}
```

### **Get Products**
```bash
GET http://127.0.0.1:8000/api/products/
```

### **Search Products**
```bash
GET http://127.0.0.1:8000/api/products/search/?q=screen
```

---

## 🛠️ **Virtual Environment**

### **Activate**
```powershell
.\venv\Scripts\activate
```

### **Deactivate**
```powershell
deactivate
```

### **Install Package**
```powershell
pip install package-name
pip freeze > requirements.txt
```

---

## 🐛 **Troubleshooting**

### **Fix: ModuleNotFoundError**
```powershell
.\venv\Scripts\activate
pip install -r requirements.txt
```

### **Fix: Port in use**
```powershell
# Kill process on port 8000
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### **Fix: CORS error**
Add to `backend/.env`:
```env
CORS_ALLOWED_ORIGINS=http://127.0.0.1:5500,http://localhost:5500
```

### **Fix: Database locked**
Close all database browser tools and restart server.

---

## 📝 **Git Commands**

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin https://github.com/rk83783/mobilefix-pro.git

# Push
git push -u origin main
```

---

## 🎯 **Quick Workflow**

### **1. Morning Routine**
```powershell
cd backend
.\venv\Scripts\activate
python manage.py runserver
# Open http://127.0.0.1:8000/admin/
```

### **2. Add Product**
- Login to admin panel
- Products → Add Product
- Fill details, upload image
- Save

### **3. Test Frontend**
- Open `index.html` in browser
- Click "Products" to see new items
- Test cart functionality

### **4. End of Day**
```powershell
# Commit changes
git add .
git commit -m "Added new products"
git push

# Stop server
Ctrl + C
deactivate
```

---

## 🚀 **Deploy Commands**

### **Heroku**
```bash
# Login
heroku login

# Create app
heroku create mobilefix-pro

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main

# Migrate
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser
```

### **Railway**
```bash
# Install CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up
```

---

## 📦 **Dependencies**

### **Update All**
```powershell
pip install --upgrade -r requirements.txt
pip freeze > requirements.txt
```

### **Add New Package**
```powershell
pip install package-name
pip freeze > requirements.txt
```

---

## 🎨 **Frontend Development**

### **Using Live Server**
- Right-click `index.html`
- Select "Open with Live Server"
- Auto-refreshes on file changes

### **Manual Server**
```powershell
# Python simple server
cd mobile-repair-website
python -m http.server 5500
```

---

## ⚙️ **Environment Variables**

Edit `backend/.env`:

```env
# Required
SECRET_KEY=your-secret-key-change-this
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Optional
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
```

---

## 📊 **Database Queries**

### **Django Shell**
```python
# Open shell
python manage.py shell

# Import models
from products.models import Product, Category
from authentication.models import User

# Query data
products = Product.objects.all()
categories = Category.objects.filter(is_active=True)
users = User.objects.count()

# Create data
category = Category.objects.create(name="Screen Repairs")
```

---

## 🎛️ **Management & Administration**

### **Product Management**
```powershell
# Via Admin Panel
# 1. Go to http://127.0.0.1:8000/admin/
# 2. Login with superuser credentials
# 3. Products → Add/Edit/Delete products
# 4. Categories → Manage product categories
```

```python
# Via Django Shell
python manage.py shell

# Add product
from products.models import Product, Category
from decimal import Decimal

category = Category.objects.get(name="Screen Repairs")
product = Product.objects.create(
    name="iPhone 14 Screen Replacement",
    description="Original OLED display",
    price=Decimal('4999.00'),
    category=category,
    stock=50,
    is_active=True
)

# Update product
product.price = Decimal('4799.00')
product.save()

# Delete product
product.delete()
```

### **User Management**
```powershell
# Create admin user
python manage.py createsuperuser
# Follow prompts: email, password, full_name, phone

# Create staff user via shell
python manage.py shell
```

```python
from authentication.models import User

# Create staff user
staff = User.objects.create_user(
    email='staff@mobilefix.com',
    password='StaffPass123!',
    full_name='Staff Member',
    phone='+919876543210',
    is_staff=True
)

# Make user admin
user = User.objects.get(email='user@example.com')
user.is_staff = True
user.is_superuser = True
user.save()

# Deactivate user
user.is_active = False
user.save()

# List all users
users = User.objects.all()
for u in users:
    print(f"{u.email} - {'Active' if u.is_active else 'Inactive'}")
```

### **Order Management**
```python
# Via Django Shell
from orders.models import Order, OrderItem
from authentication.models import User

# View all orders
orders = Order.objects.all().order_by('-created_at')

# View pending orders
pending = Order.objects.filter(status='PENDING')

# Update order status
order = Order.objects.get(order_number='ORD123456')
order.status = 'PROCESSING'
order.save()

# View user's orders
user = User.objects.get(email='user@example.com')
user_orders = Order.objects.filter(user=user)

# Calculate total revenue
from django.db.models import Sum
total_revenue = Order.objects.filter(
    status='COMPLETED'
).aggregate(Sum('total_amount'))['total_amount__sum']
```

### **Category Management**
```python
# Via Django Shell
from products.models import Category

# Create category
category = Category.objects.create(
    name="Battery Replacement",
    description="All types of mobile batteries",
    is_active=True
)

# Update category
category.description = "Premium mobile batteries"
category.save()

# List products in category
products = category.products.filter(is_active=True)

# Deactivate category
category.is_active = False
category.save()
```

### **Bulk Operations**
```python
# Import products from CSV (example)
import csv
from products.models import Product, Category
from decimal import Decimal

category = Category.objects.get(name="Screen Repairs")

with open('products.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        Product.objects.create(
            name=row['name'],
            description=row['description'],
            price=Decimal(row['price']),
            category=category,
            stock=int(row['stock']),
            is_active=True
        )

# Bulk update prices (10% discount)
products = Product.objects.filter(category__name="Screen Repairs")
for product in products:
    product.price = product.price * Decimal('0.9')
    product.save()

# Or use bulk_update (more efficient)
products = Product.objects.filter(category__name="Screen Repairs")
for product in products:
    product.price = product.price * Decimal('0.9')
Product.objects.bulk_update(products, ['price'])
```

### **Data Backup & Restore**
```powershell
# Backup database (SQLite)
copy backend\db.sqlite3 backend\db_backup_2025-10-17.sqlite3

# Restore database
copy backend\db_backup_2025-10-17.sqlite3 backend\db.sqlite3

# Export data to JSON
python manage.py dumpdata > backup.json
python manage.py dumpdata products > products_backup.json
python manage.py dumpdata authentication.User > users_backup.json

# Import data from JSON
python manage.py loaddata backup.json
```

### **Clear Cache & Temp Data**
```powershell
# Clear all sessions
python manage.py clearsessions

# Clear migration files (careful!)
# Remove all migration files except __init__.py
# Then run:
python manage.py makemigrations
python manage.py migrate
```

### **Monitor & Logs**
```powershell
# View server logs (real-time)
# Logs appear in terminal when runserver is active

# Check for errors
python manage.py check

# Check deployment readiness
python manage.py check --deploy

# Show migrations status
python manage.py showmigrations

# SQL for migration
python manage.py sqlmigrate products 0001
```

### **Performance Management**
```python
# Via Django Shell
# Check slow queries
from django.db import connection
from django.db import reset_queries
from django.conf import settings

settings.DEBUG = True

# Your query here
from products.models import Product
products = list(Product.objects.select_related('category').all())

# View queries
print(len(connection.queries))
for query in connection.queries:
    print(f"Time: {query['time']}s")
    print(f"SQL: {query['sql']}\n")
```

### **Static Files Management**
```powershell
# Collect static files for production
python manage.py collectstatic --noinput

# Find static files location
python manage.py findstatic admin/css/base.css

# Clear collected static files
Remove-Item -Recurse -Force backend\staticfiles
```

### **Testing Management**
```powershell
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test products
python manage.py test authentication

# Run with verbosity
python manage.py test --verbosity=2

# Keep test database
python manage.py test --keepdb
```

---

## 🎯 **Remember**

- ✅ Always activate virtual environment first
- ✅ Use Swagger for API testing
- ✅ Check admin panel for data
- ✅ Keep `.env` secure
- ✅ Test locally before deploying

---

**Quick Help:**
- Full setup: `SETUP_AND_RUN.md`
- Backend docs: `backend/BACKEND_FULLY_COMPLETE.md`
- Start guide: `README_START_HERE.md`

**Built by: rk83783**
