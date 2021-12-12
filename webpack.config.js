const path = require('path')


// Step 6 - указываем объект конфигурации вебпака
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
    }
}