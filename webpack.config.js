const path = require('path');

module.exports = {
  entry: './src/index.js', // arquivo de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, 'build'), // diretório de saída para o build
    filename: 'bundle.js', // nome do arquivo de saída
    publicPath: '/', // caminho público para o servidor
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex para arquivos JS e JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // loader para transpilar JavaScript
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // presets do Babel
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // extensões de arquivo a serem resolvidas automaticamente
  },
  devServer: {
    contentBase: './build', // diretório base do servidor de desenvolvimento
    port: 3000, // porta do servidor
    historyApiFallback: true, // habilita fallback para React Router
  },
};
