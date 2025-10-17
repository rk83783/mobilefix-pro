@echo off
echo ========================================
echo   MobileFix Pro - Quick Start
echo ========================================
echo.

echo [1/6] Checking Python...
python --version
if %errorlevel% neq 0 (
    echo ERROR: Python not found!
    pause
    exit /b 1
)

echo.
echo [2/6] Creating virtual environment...
cd backend
python -m venv venv

echo.
echo [3/6] Activating virtual environment...
call venv\Scripts\activate.bat

echo.
echo [4/6] Installing dependencies...
pip install -r requirements.txt

echo.
echo [5/6] Setting up database...
copy .env.example .env
python manage.py makemigrations
python manage.py migrate

echo.
echo [6/6] Setup complete!
echo.
echo ========================================
echo   Ready to start!
echo ========================================
echo.
echo To start the backend server, run:
echo   cd backend
echo   venv\Scripts\activate
echo   python manage.py runserver
echo.
echo Frontend is already running on:
echo   http://localhost:8080
echo.
pause
