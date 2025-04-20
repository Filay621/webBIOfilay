from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys
import socket

def is_port_available(port):
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind(('', port))
            return True
    except:
        return False

def run(port=80):
    if not is_port_available(port):
        print(f'\nОшибка: Порт {port} уже используется.')
        print('Пожалуйста, закройте программу, использующую этот порт.')
        sys.exit(1)

    try:
        server_address = ('', port)
        httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
        
        print('\n╔════════════════════════════════════╗')
        print('║        Сервер Filay Site           ║')
        print('╚════════════════════════════════════╝\n')
        print('Статус: ЗАПУЩЕН ✓')
        print(f'Порт: {port}\n')
        print('Доступ к сайту:')
        print(f'► Локальная сеть: http://192.168.0.3:{port}')
        print(f'► Внешний доступ: http://178.216.76.48:{port}\n')
        print('Для остановки сервера нажмите Ctrl+C\n')
        
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nСервер остановлен пользователем.')
        httpd.server_close()
        sys.exit(0)
    except Exception as e:
        print(f'\nНеожиданная ошибка: {str(e)}')
        print('Пожалуйста, сообщите об этой ошибке разработчику.')
        sys.exit(1)

if __name__ == '__main__':
    run() 