# 🚀 First Time Setup - Django Backend

## ⚠️ Important: Run This Before Testing!

If you're seeing "Django not found" error, follow these steps:

---

## 📋 Setup Steps

### Step 1: Create Virtual Environment

```powershell
cd "c:\Users\Rakesh\.cursor\mobile-repair-website\backend"
python -m venv venv
```

### Step 2: Activate Virtual Environment

```powershell
.\venv\Scripts\activate
```

You should see `(venv)` at the start of your command prompt.

### Step 3: Upgrade pip

```powershell
python -m pip install --upgrade pip
```

### Step 4: Install Dependencies

```powershell
pip install -r requirements.txt
```

This will install all 45 packages (takes 2-3 minutes):
- Django 4.2.7
- djangorestframework
- djangorestframework-simplejwt
- django-cors-headers
- And many more...

### Step 5: Copy Environment File

```powershell
copy .env.example .env
```

### Step 6: Create Database

```powershell
python manage.py makemigrations
python manage.py migrate
```

### Step 7: Create Admin User

```powershell
python manage.py createsuperuser
```

When prompted:
- **Email:** admin@example.com (or your choice)
- **Password:** (choose a strong password)

### Step 8: Start Server

```powershell
python manage.py runserver
```

**Success!** You should see:
```
Starting development server at http://127.0.0.1:8000/
```

---

## 🎯 Quick Setup (All-in-One)

```powershell
cd "c:\Users\Rakesh\.cursor\mobile-repair-website\backend"
python -m venv venv
.\venv\Scripts\activate
python -m pip install --upgrade pip
pip install -r requirements.txt
copy .env.example .env
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

---

## ✅ Verify Setup

After setup, visit these URLs:

1. **API Root:** http://127.0.0.1:8000/api/
2. **Admin Panel:** http://127.0.0.1:8000/admin/
3. **API Docs:** http://127.0.0.1:8000/swagger/

---

## 🆘 Troubleshooting

### "python not found"
**Solution:** Install Python 3.8+ from python.org

### "venv not created"
**Solution:** Use `python -m venv venv` instead of `python3`

### "pip install fails"
**Solution:** Run PowerShell as Administrator

### "makemigrations error"
**Solution:** Make sure virtual environment is activated (see `(venv)` in prompt)

---

## 📝 Next Steps

After successful setup:

1. ✅ Backend running on port 8000
2. ✅ Open your frontend (index.html)
3. ✅ Test login/register
4. ✅ See `START_HERE.md` for testing guide

---

**Need help?** Check the error messages - Django gives helpful hints!
