@echo off
echo Открываем брандмауэр Windows...
WF.msc
echo.
echo Пожалуйста, выполните следующие действия:
echo 1. Нажмите "Правила для входящего подключения" слева
echo 2. Нажмите "Создать правило..." справа
echo 3. Выберите "Для порта"
echo 4. Укажите порт TCP: 80
echo 5. Разрешите подключение
echo 6. Назовите правило "Filay Site HTTP"
echo.
echo После создания правила нажмите любую клавишу...
pause 