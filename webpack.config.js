const path = require('path');

/* env -> 'development' or 'production' */
module.exports = (env) => ({
    mode: env.development ? 'development' : 'production',
    entry: `./src/index${env.development ? '_testing' : ''}.jsx`,
    output: {
        path: path.resolve(__dirname, 'dist', 'public'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 30000,
    },
});
