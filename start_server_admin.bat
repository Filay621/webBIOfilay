@echo off
chcp 65001 >nul
title Filay Site Server

cls
echo ╔════════════════════════════════════╗
echo ║     Запуск сервера Filay Site      ║
echo ╚════════════════════════════════════╝
echo.
echo Подождите, выполняется запуск...
echo.

cd /d G:\jd

:check_python
python --version >nul 2>&1
if errorlevel 1 (
    echo Ошибка: Python не установлен!
    echo Установите Python с сайта python.org
    echo.
    pause
    exit /b 1
)

:run_server
python server.py

if errorlevel 1 (
    echo.
    echo Произошла ошибка при запуске сервера.
    echo.
    echo Для выхода нажмите любую клавишу...
    pause >nul
    exit /b 1
) 