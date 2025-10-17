# ⚡ Quick Start Guide - MobileFix Pro Backend

## 🚀 Get Running in 5 Minutes

### Step 1: Navigate to Backend Directory
```powershell
cd c:\Users\Rakesh\.cursor\mobile-repair-website\backend
```

### Step 2: Run Automated Setup
```powershell
.\setup.ps1
```

**This will:**
- ✅ Create virtual environment
- ✅ Install all 45 dependencies
- ✅ Create .env file
- ✅ Run database migrations
- ✅ Ask you to create admin account

### Step 3: Start Server
```powershell
python manage.py runserver
```

### Step 4: Test the API
Visit: `http://127.0.0.1:8000/swagger/`

---

## 📱 Test from Frontend

### In Browser Console (or your JS file):

```javascript
// Test registration
fetch('http://127.0.0.1:8000/api/auth/register/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'TestPass123!',
    password_confirm: 'TestPass123!',
    full_name: 'Test User'
  })
})
.then(r => r.json())
.then(d => {
  console.log('✅ Registered!');
  console.log('Token:', d.access);
  localStorage.setItem('token', d.access);
});

// Test login
fetch('http://127.0.0.1:8000/api/auth/login/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'TestPass123!'
  })
})
.then(r => r.json())
.then(d => {
  console.log('✅ Logged in!');
  localStorage.setItem('token', d.access);
});

// Get profile
const token = localStorage.getItem('token');
fetch('http://127.0.0.1:8000/api/auth/profile/', {
  headers: { 'Authorization': `Bearer ${token}` }
})
.then(r => r.json())
.then(u => console.log('User:', u));
```

---

## 🎯 Available Endpoints

### Authentication
```
POST /api/auth/register/       - Register
POST /api/auth/login/          - Login  
POST /api/auth/logout/         - Logout
GET  /api/auth/profile/        - Get profile
PUT  /api/auth/profile/        - Update profile
POST /api/auth/change-password/ - Change password
POST /api/auth/refresh/        - Refresh token
```

### Documentation
```
GET /swagger/                  - Swagger UI
GET /redoc/                    - ReDoc UI
GET /admin/                    - Admin Panel
```

---

## 🔑 Environment Variables

Edit `.env` file for configuration:

```env
# Required for production
SECRET_KEY=your-secret-key
DEBUG=False
ALLOWED_HOSTS=yourdomain.com

# Payment gateways
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key

# Email (optional)
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

---

## 🐛 Troubleshooting

### "Module not found" errors?
```powershell
# Make sure virtual environment is activated
.\venv\Scripts\activate

# Reinstall dependencies
pip install -r requirements.txt
```

### Migration errors?
```powershell
# Delete database and start fresh
rm db.sqlite3
python manage.py makemigrations
python manage.py migrate
```

### CORS errors from frontend?
Check `.env` file has your frontend URL:
```env
CORS_ALLOWED_ORIGINS=http://localhost:8080
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `QUICKSTART.md` | This file (quick setup) |
| `COMPLETION_SUMMARY.md` | Complete feature list |
| `DJANGO_SETUP_COMPLETE.md` | Detailed setup guide |
| `README.md` | Full API documentation |

---

## ✅ Checklist

After setup, you should have:

- [x] Virtual environment created (`venv/`)
- [x] Dependencies installed (45 packages)
- [x] `.env` file created
- [x] Database migrated (`db.sqlite3`)
- [x] Superuser account created
- [x] Server running on port 8000
- [x] API accessible at `/api/`
- [x] Admin panel accessible at `/admin/`
- [x] Swagger docs at `/swagger/`

---

## 🚀 Next Steps

1. **Test Authentication** - Try register/login from frontend
2. **Access Admin Panel** - Add products, manage users
3. **Complete Remaining APIs** - Products, orders, payments
4. **Connect Frontend** - Update API URLs in JS files
5. **Deploy** - Use Heroku, Railway, or VPS

---

**Need help?** Check the detailed docs or ask for assistance!

**Ready to build amazing features! 🎉**
