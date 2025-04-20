@echo off
title Filay Bio Website - Local Server
color 0A

echo [*] Starting local server...
echo [*] Server will be available at http://localhost:8000

cd /d "G:\jd"
start "Python Server" cmd /c "python -m http.server 8000"

echo [*] Waiting for server to start...
timeout /t 2 /nobreak >nul

echo [*] Opening website in your default browser...
start http://localhost:8000

echo.
echo [*] Server is running! 
echo [*] Press Ctrl+C to stop the server
echo [*] Close this window to exit
echo.

cmd /k 