# Trending.bid test
## Требования
Docker  
Node.js  
Npm  
## Как запустить в режиме dev
Клонируйте репозиторий  
Установите зависимости командой:
```bash
npm install
```
Создайте файл .env в корне проекта  
Скопируйте в него всё из файла .env.example  
Запустите dev контейнер с redis командой:
```bash
docker-compose -f docker-compose.dev.yml up -d
```
Запустите бекенд командой:
```bash
npm run start:dev
```
## Как запустить в режиме production
Клонируйте репозиторий
Запустите контейнеры с redis и backend командой:
```bash
docker-compose up -d
```
## Роуты
POST /auth - Авторизоваться  
body: {  
	"PHPSESSID": "PHPSESSID c сайта https://trending.bid"  
}  

GET /balance - Получить баланс
## Как получить PHPSESSID? 
Авторизуйтесь на сайте https://trending.bid.  
С помощью инструментов разработчика браузера, найдите запросы к сайту.  
В запросе будет header Cookie, в котором будет PHPSESSID параметр.  
