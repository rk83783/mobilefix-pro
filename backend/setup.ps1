# MobileFix Pro Backend - Quick Setup Script
# Run this in PowerShell

Write-Host "🚀 MobileFix Pro Backend Setup" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

# Check Python
Write-Host "Checking Python installation..." -ForegroundColor Yellow
python --version
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Python not found! Please install Python 3.8+" -ForegroundColor Red
    exit 1
}

# Create virtual environment
Write-Host "`n📦 Creating virtual environment..." -ForegroundColor Yellow
python -m venv venv

# Activate virtual environment
Write-Host "`n🔧 Activating virtual environment..." -ForegroundColor Yellow
.\venv\Scripts\activate

# Upgrade pip
Write-Host "`n⬆️  Upgrading pip..." -ForegroundColor Yellow
python -m pip install --upgrade pip

# Install dependencies
Write-Host "`n📥 Installing dependencies..." -ForegroundColor Yellow
pip install -r requirements.txt

# Copy .env file
if (!(Test-Path .env)) {
    Write-Host "`n📄 Creating .env file..." -ForegroundColor Yellow
    Copy-Item .env.example .env
    Write-Host "✅ .env created. Please update it with your settings." -ForegroundColor Green
}

# Make migrations
Write-Host "`n🗄️  Creating database migrations..." -ForegroundColor Yellow
python manage.py makemigrations

# Run migrations
Write-Host "`n🗄️  Running migrations..." -ForegroundColor Yellow
python manage.py migrate

# Create superuser prompt
Write-Host "`n👤 Create superuser account:" -ForegroundColor Yellow
Write-Host "Please follow the prompts to create an admin account`n" -ForegroundColor Cyan
python manage.py createsuperuser

Write-Host "`n✅ Setup complete!" -ForegroundColor Green
Write-Host "`nTo start the server, run:" -ForegroundColor Cyan
Write-Host "  python manage.py runserver`n" -ForegroundColor White

Write-Host "Then visit:" -ForegroundColor Cyan
Write-Host "  API: http://127.0.0.1:8000/api/" -ForegroundColor White
Write-Host "  Admin: http://127.0.0.1:8000/admin/" -ForegroundColor White
Write-Host "  Swagger: http://127.0.0.1:8000/swagger/`n" -ForegroundColor White
