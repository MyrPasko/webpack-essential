let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',                  // точка входа
    output: {
        path: path.resolve(__dirname, 'dist'),// адрес выхода
        filename: 'main.js',                  // точка выхода (если одна)
        publicPath: "/dist"                   // хз что это
    },
    devServer: {
        overlay: true,                 // выброс ексепшенов на всю страницу
        inline: true,
        port: 8080,                    // определение порта
    },
    module: {
        rules: [
            {
                test: /\.js$/,              // все js файлы перегоняются в es5
                loader: "babel-loader",     // загрузчик бабеля для js
                // exclude: '/node_modules/'
            },
            {
                test: /\.css$/,              // все css файлы сгоняются в один файл
                /** Вот здесь нужно быть осторожным при использовании Бабеля.
                 * Не со всеми версиями Бабеля эти лоадеры совместимы.
                 * Я специально понизил версии, потому что babel-preset-env и babel-core
                 * ругались на них.*/
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",       // стоит первым, просто собирает файлы
                    use: "css-loader"               // минифицирует файлы
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
    // devtool: "eval-sourcemap" // правильное отображение позиций в консоли
};

module.exports = (environment, options) => {
    console.log("options: ", options);
    const mode = options.mode === 'production';

    conf.devtool = mode ? false : "eval-sourcemap";

    return conf;
};