@echo off
chcp 65001 >nul
title Запуск Filay Site

cls
echo ╔════════════════════════════════════╗
echo ║   Запуск Filay Site (как админ)    ║
echo ╚════════════════════════════════════╝
echo.
echo Запрос прав администратора...
echo.

powershell -Command "Start-Process cmd -Verb RunAs -ArgumentList '/c cd /d G:\jd && start_server_admin.bat'"

if errorlevel 1 (
    echo.
    echo Ошибка: Не удалось получить права администратора
    echo.
    echo Для выхода нажмите любую клавишу...
    pause >nul
    exit /b 1
) 