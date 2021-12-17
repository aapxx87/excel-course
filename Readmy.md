__________________________________________
Block: настройка окружения
Unit 9: Работа с Git
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=160210306

__Topics__:
- Зальем апдейты для окружения в гит и совместим ихс основной веткой


__Steps__:
1) добавим package-lock.json в гит - либо "git add .", либо правой кнопкой по файлу - Git - Add
<<<<<<< HEAD
2) добавим коммит - git commit -m "finish project config" - либо cmd + k
3) запушим коммит, либо cmd + shift + k - либо "git push -u origin webpack"
4) далее мы создаем pull request - заходим в репу на гитхабе и нажимаем на кнопку Compare & pull request
5) нажимаем create pull request - но это еще не значит, что все смерджилось
6) нажимаем Merge Pull request - Merge
7) после того как все изменения закомичены, переключаемся обратно в ветку main - git checkout main
8) но сейчас мы переключились локально в ветку main, а все изменения сохранены на удаленном репозитории, нам нужно синхронизироваться с основным репозиторием - git pull
=======
>>>>>>> f32e6b8cac9740640f9a09b6d8dca1f9c6248090





__________________________________________
Block: настройка окружения
Unit 8: Настройка ESlint
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480429&editMode=0

__Topics__:


__Steps__:
1) заходим сюда - EslintWebpackPlugin - https://webpack.js.org/plugins/eslint-webpack-plugin/#root. Ставим - npm install eslint-webpack-plugin eslint --save-dev
2) дописываем в конфиг импорт - const ESLintPlugin = require('eslint-webpack-plugin');
3) добавляем его в список плагинов - new ESLintPlugin(options)

- Почитать про EsLint


-> Пропустил




__________________________________________
Block: настройка окружения
Unit 7: Настройка DevServer
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480418

__Topics__:


__Steps__:
1) устанавливаем модуль - https://github.com/webpack/webpack-dev-server -  npm install webpack-dev-server --save-dev
2) package-json - в скрипт -  "start": "webpack --mode=development", - добавляем serve - "start": "webpack serve --mode=development"
3) в объект конфигурации добавить доп параметр:
    devServer: {
        port: '3000',
        // при запуске данного режима разработки сразу будет запускаться броузер
        open: true, 
        // параметр для автоматической перезагрузки сервера при наличии изменений
        hot: true,
       watchFiles: './',
   },
   target: "web",








__________________________________________
Block: настройка окружения
Unit 6: Режимы сборки
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480410

__Topics__:


__Steps__:

-> Пропустил





__________________________________________
Block: настройка окружения
Unit 5: Добавление лоадеров
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480378

__Topics__:
Добавим лоадеры в нашу конфигурацию (подробнее про лоадеры см в курсе по webpack)
Лоадеры позволяют вебпаку работать не только с js файлами но и с остальными форматами

__Steps__:
1) добавим sass лоадер - https://webpack.js.org/loaders/sass-loader/#root - устанавливаем так-же через терминал - npm install sass-loader sass --save-dev
2) подключим новый модуль в объект конфигурации, важно понимать, что порядок лоадеров идет справа налево - style-loader мы убираем (он подключает стили в html файл в хедер). Нам же нужно преобразовывать sass фалы в css и складывать их в папку dist. А для этого нам нужно заменить style-loader на MiniCssExtractPlugin - https://webpack.js.org/plugins/mini-css-extract-plugin/#root - он выносит стили в отдельный файл - устанавливаем его - npm install --save-dev mini-css-extract-plugin
3) импортируем в файл конфигурации MiniCssExtractPlugin - const MiniCssExtractPlugin = require("mini-css-extract-plugin");
4) тут же нужно подключить лоадер - MiniCssExtractPlugin.loader, вставляем его вместо style-loader
5) подключаем еще как плагин в плагины - new MiniCssExtractPlugin() - и в него нужно добавить параметр filename, который будет отвечать за то как будет называться наш файл
6) sass - лоадер мы установили, теперь нужно установить css лоадер - npm i -D css-loader
7) создадим отдельную папку в src для стилей scss -> в ней создадим файл index.scss
8) index.js - подключим стили -> протестируем сборку и в папке dist появится файл main.bundle.css

- с момента babel я забил ставить
4:57









__________________________________________
Block: настройка окружения
Unit 4: Добавление плагинов
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480337&editMode=0

__Topics__:
Добавляем плагины в вебпак

__Steps__:
1) нужен плагин для работы с html - переходим на сайт вебпака и находим нужный плагин (https://webpack.js.org/plugins/html-webpack-plugin/#root), копируем и вставляем команду установки а терминал - npm install --save-dev html-webpack-plugin 
2) подключаем импорт плагина в конфиг - const HtmlWebpackPlugin = require('html-webpack-plugin'); и подключаем сам плагин в свойство объекта настроек в конфиге
3) для того чтобы плагин для работы с HTML знал откуда брать шаблон, мы добавляем в папку src файл index.html. Добавим в него базовую разметку и корневой div.
4) добавляем в плагин HTML в свойствах объекта конфигурации расположение шаблона верстки - билдим проект и получаем папку dist с html и bundle
5) нам нужно подключить фавиконку, мы ее подключаем в нашем html фале в src, и он парсится в html в dist, но ее нет в папке dist. Мы сделаем так чтобы при каждой сборке проекта фавиконка автоматически добавлялась в dist. в этмо нам поможет CopyWebpackPlugin - https://webpack.js.org/plugins/copy-webpack-plugin/#root. Устаналиваем его - npm install copy-webpack-plugin --save-dev . Добавляем ипорт плагина в файл конфига и подключаем в свойство объекта конфига в плагины. Настраиваем пути откуда что копируем и куда. Запускам сборку и фавиконка копируется.
6) в объект конфигурации добавим параметр resolve. первым параметром добавим в него extensions, который нужен для того, чтобы делать более удобные импорты - убираем расширение js в указании пути до файлов. Сюда же добавим alias -  в указании пути типа '../../path/file' мы можем писать '@/path/file'






__________________________________________

Block: настройка окружения
Unit 3: Базовая настройка
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=193480297

__Topics__:

__Steps__:
1) идем на оф сайт webpack - https://webpack.js.org/guides/getting-started/#basic-setup - там расписаны все шаги
2) инициализируем npm - npm init -y
3) в package.json добавляем параметр: "privat": true, что говорит что наш проект приватный, чтобы случайно его не опубликовать
4) теперь устанавливаем сам webpack - npm install webpack webpack-cli --save-dev
5) создадим папку src, чтобы разграничить файлы исходники и системные файлы нашего приложения, в ней создадим index.js - входной файл нашего проекта
6) webpack.config.js - переходим к конфигу вебпака, то есть нам нужно вернуть из него объект
7) теперь нужно протестировать все, добавить для этого в package.json скрипт: "start": "webpack --mode=development", "build": "webpack --mode=production"
8) запускаем dev mode = npm run start -> после этого появляется папка dist c файлом main.bundle.js










__________________________________________

Block: настройка окружения
Unit 2: Настройка и работа с Git
Link: https://vladilen.ru/pl/teach/control/lesson/view?id=160210267

__Topics__:
- проинициализируем контрольные версии GIT


__Steps__:
1) создали на GitHub новый репозиторий для проекта 
2) подготовим наш код и добавим файл .gitignore - данный файл говорит какие файлы мы не хотим складывать в систему контроля версий git. Добавляем папку idea  (это локальные настройки редактора кода, они другим пользователям не нужны), node_modules (набор библиотек и пакетов)
3) нужно проинициализировать репозиторий в нашем проекте - git init
4) добавляем все файлы для наблюдения - git add .
5) делаем первый коммит, базовый комит, который инициализирует данны репозиторий (флаг -m - message) - git commit -m "initial"
6) добаялем удаленный репозиторий (берем команду прямо из окна github) - git remote add origin https://github.com/aapxx87/excel-course.git
7) заливаем код целиком в репозиторий - git push -u origin main - на этом этапе возникли проблемы, пришлось заливать через GitHub Desktop

8) нам нужно будет имплементировать webpack, поэтому создадим отдельную ветку и переключимся на нее - git checkout -b "webpack"
9) создадим новый файл webpack.config
10) теперь мы хотим зафиксировать изменения с локальной машины на удаленный репозиторий, но не сливать их с веткой main - git add .
11) пишем - git commit -m "create webpack config"
12) пушим все в ветку webpack - git push -u origin webpack - опять выдало ошибку с аутентификацией, но я без проблем залил через Десктоп в нужную ветку