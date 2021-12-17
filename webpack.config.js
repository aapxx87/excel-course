const path = require('path')

//подключаем плагин для работы с html
const HtmlWebpackPlugin = require('html-webpack-plugin');

//подключаем плагин для работы с фавиконкой
const CopyPlugin = require("copy-webpack-plugin");

//подключаем плагин для вынесения стилей в отдельный файл
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// подключаем ESLinter
// const ESLintPlugin = require('eslint-webpack-plugin');


// указываем объект конфигурации вебпака
module.exports = {
//    укажем папку с исходниками, указываем полный путь до папки src. Для этого нам нужно подключить модуль path
    context: path.resolve(__dirname, 'src'),
//    нужно задать входные точки для нашего приложения, то есть указать вебпаку, чтобы он смотрел index.js
    entry: {
        // указываем точку входа, относительный путь и мы как-бы находимся внутри папки src, ибо мы указали ее в качестве контекста
        main: './index.js'
    },
//    нужно указать выходной файл
    output: {
    //    указываем куда будут генерироваться эти файлы
        path: path.resolve(__dirname, 'dist'),
    //    задаем название файла, имя в [] будет подставляться днамически, название будет подставляться из main
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            // когда мы пишем этот символ нас будет перенаправлять на папку src
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'core')
        }
    },
    // настраиваем сервер разработки
    devServer: {
        port: '3000',
        // при запуске данного режима разработки сразу будет запускаться броузер
        open: true,
    //    параметр для автоматической перезагрузки сервера при наличии изменений
        hot: true,
        // смотрит апдейт всего
        // watchFiles: './',
    },
    // указываем цель для сборки чтобы работала автоматическая перезагрузка при обновлении файлов
    target: "web",
    //подключаем плагин работы с html
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html',
    }),
        new CopyPlugin({
        patterns: [
            { from: path.resolve(__dirname, 'src', 'favicon.ico'), to: path.resolve(__dirname, 'dist') },
        ],
    }), new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
//    подключим модуль sass
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
}