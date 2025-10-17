# 🎯 MobileFix Pro - Quick Reference Card

## 📱 **Project Overview**
**Name:** MobileFix Pro  
**Type:** Full-Stack Mobile Repair Website  
**Repository:** https://github.com/rk83783/mobilefix-pro  
**Author:** rk83783

---

## 🖥️ **Local Development**

### **Start Frontend (Port 8080)**
```powershell
cd c:\Users\Rakesh\.cursor\mobile-repair-website
python -m http.server 8080
```
**Access:** http://localhost:8080

### **Start Backend (Port 8000)**
```powershell
cd c:\Users\Rakesh\.cursor\mobile-repair-website\backend
.\venv\Scripts\activate
python manage.py runserver
```
**Access:** http://127.0.0.1:8000

---

## 🔑 **Admin Credentials**

**Django Admin Panel:**
- **URL:** http://127.0.0.1:8000/admin/
- **Email:** admin@local.com
- **Password:** admin123

---

## 🚀 **Deployment**

### **Frontend (Vercel)**
1. Visit: https://vercel.com/new
2. Import: `rk83783/mobilefix-pro`
3. Settings: Framework: Other, Output: `.`
4. Click Deploy

**Live URL:** `https://mobilefix-pro.vercel.app`

### **Backend (Railway/Render)**
- Use Railway or Render for Django backend
- See `VERCEL_DEPLOY_GUIDE.md` for details

---

## 📂 **Key Files**

### **Frontend**
- `index.html` - Homepage
- `products.html` - Product catalog
- `cart.html` - Shopping cart
- `contact.html` - Contact form
- `login.html` - User authentication
- `admin.html` - Admin dashboard

### **Backend**
- `backend/manage.py` - Django management
- `backend/mobilefix_backend/settings.py` - Configuration
- `backend/requirements.txt` - Dependencies

### **Documentation**
- `QUICK_COMMANDS.md` - Complete command reference (607 lines)
- `VERCEL_DEPLOY_GUIDE.md` - Deployment guide
- `README_START_HERE.md` - Getting started
- `API_INTEGRATION_GUIDE.md` - API documentation

---

## 🌐 **URLs & Endpoints**

### **Frontend**
- Homepage: `/index.html`
- Products: `/products.html`
- Cart: `/cart.html`
- Contact: `/contact.html`
- Login: `/login.html`
- Admin: `/admin.html`

### **Backend API**
- API Root: `/api/`
- Authentication: `/api/auth/`
- Products: `/api/products/`
- Orders: `/api/orders/`
- Payments: `/api/payments/`
- Swagger Docs: `/swagger/`
- ReDoc: `/redoc/`

---

## 🛠️ **Common Commands**

### **Git**
```powershell
git add .
git commit -m "Your message"
git push origin main
```

### **Database**
```powershell
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

### **Virtual Environment**
```powershell
# Activate
.\venv\Scripts\activate

# Deactivate
deactivate
```

---

## 📊 **Project Stats**

- **Total Files:** 79+
- **Total Lines:** 11,000+
- **Frontend Files:** HTML, CSS, JS
- **Backend Apps:** 5 (auth, products, orders, payments, uploads)
- **Documentation:** 10+ markdown files

---

## 🎨 **Features**

✅ Responsive Design  
✅ Product Catalog with Search & Filter  
✅ Shopping Cart with Local Storage  
✅ User Authentication  
✅ Admin Panel  
✅ Django REST API  
✅ Swagger/ReDoc Documentation  
✅ Payment Integration Ready  
✅ Order Management  
✅ File Upload Support

---

## 📞 **Quick Links**

- **GitHub:** https://github.com/rk83783/mobilefix-pro
- **Vercel Deploy:** https://vercel.com/new
- **Local Frontend:** http://localhost:8080
- **Local Backend:** http://127.0.0.1:8000
- **Admin Panel:** http://127.0.0.1:8000/admin/
- **API Docs:** http://127.0.0.1:8000/swagger/

---

## 💡 **Pro Tips**

1. **Always activate virtual environment** before running Django commands
2. **Use Swagger** for testing API endpoints
3. **Check QUICK_COMMANDS.md** for detailed command reference
4. **Push to GitHub** before deploying to Vercel
5. **Test locally** before pushing to production

---

## 🚨 **Important Notes**

- Frontend runs on port **8080**
- Backend runs on port **8000**
- Admin credentials: **admin@local.com** / **admin123**
- Repository: **https://github.com/rk83783/mobilefix-pro**
- Deploy frontend to **Vercel**
- Deploy backend to **Railway** or **Render**

---

## 📚 **Full Documentation**

For complete details, see:
- `QUICK_COMMANDS.md` - All commands and management tasks
- `VERCEL_DEPLOY_GUIDE.md` - Step-by-step deployment
- `README_START_HERE.md` - Project overview
- `SETUP_AND_RUN.md` - Setup instructions

---

**🎉 MobileFix Pro - Professional Mobile Repair Solution**

**Author:** rk83783  
**Version:** 1.0.0  
**Last Updated:** October 17, 2025
