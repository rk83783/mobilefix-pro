# 🚀 Quick Start - Django API Integration

## ⚡ Get Running in 3 Steps

### Step 1: Start Django Backend

Open PowerShell and run:

```powershell
cd "c:\Users\Rakesh\.cursor\mobile-repair-website\backend"
.\venv\Scripts\activate
python manage.py runserver
```

**You should see:**
```
Starting development server at http://127.0.0.1:8000/
```

✅ **Backend is now running!**

---

### Step 2: Open Your Website

**Option A:** Double-click `index.html`

**Option B:** Use VS Code Live Server
1. Right-click on `index.html`
2. Select "Open with Live Server"

✅ **Frontend is now running!**

---

### Step 3: Test Authentication

#### Register a New User

1. Click **"Login"** button on homepage
2. Click **"Register"** tab
3. Fill in the form:
   - Email: `test@example.com`
   - Password: `Test123!`
   - Confirm Password: `Test123!`
   - First Name: `Test`
   - Last Name: `User`
   - Phone: `+919876543210`
4. Click **"Create Account"**

**Expected Result:**
- ✅ Success message appears
- ✅ You're automatically logged in
- ✅ Redirected to homepage
- ✅ "Login" button now shows your name

#### Login with Existing User

1. Click **"Login"** button (or your name)
2. Enter credentials:
   - Email: `test@example.com`
   - Password: `Test123!`
3. Click **"Sign In"**

**Expected Result:**
- ✅ Welcome message appears
- ✅ Redirected to homepage
- ✅ Button shows your name

#### Test User Menu

1. Click on your name (top-right)
2. You should see dropdown with:
   - 👤 Profile
   - 🛍️ My Orders
   - 🚪 Logout

---

## 🧪 Quick Browser Test

Open browser console (Press **F12**), then run:

```javascript
// Check if you're logged in
console.log('Authenticated?', API.isAuthenticated());

// See your user data
console.log('User:', API.getCurrentUser());

// Test profile fetch
API.auth.getProfile().then(console.log);
```

---

## 🎯 What's Working

✅ User Registration  
✅ User Login  
✅ User Logout  
✅ Get User Profile  
✅ Update Profile  
✅ Change Password  
✅ Auto Token Refresh  
✅ Admin Page Protection  
✅ Session Persistence  

---

## 🆘 Troubleshooting

### Backend not starting?

**Error:** "django not found"

**Solution:**
```powershell
cd backend
.\venv\Scripts\activate
pip install -r requirements.txt
```

### CORS error in browser console?

**Solution:** Make sure backend `.env` has:
```
CORS_ALLOWED_ORIGINS=http://localhost:8080,http://127.0.0.1:8080
```

Then restart Django server.

### Login button doesn't change?

**Solution:** 
1. Check backend is running
2. Check browser console for errors
3. Make sure `api-client.js` is loaded (view page source)

---

## 📚 Full Documentation

- **Integration Guide:** `INTEGRATION_COMPLETE.md`
- **API Reference:** `QUICK_API_REFERENCE.md`
- **Examples:** `integration-examples.js`
- **Backend Setup:** `backend/QUICKSTART.md`

---

## ✅ Success Checklist

After testing, you should have:

- [ ] Django backend running on port 8000
- [ ] Website opens in browser
- [ ] Can register new user
- [ ] Can login with user
- [ ] "Login" button shows user name when logged in
- [ ] User dropdown menu appears
- [ ] Can logout successfully
- [ ] User state persists on page refresh

---

**All working? Great! 🎉**

Now you can:
- Build the Products API
- Add Orders system
- Integrate Payment gateways
- Deploy to production

---

**Need help?** Check the documentation files or browser console for detailed error messages.

**Happy coding! 🚀**
