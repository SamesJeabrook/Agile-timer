const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                'babel-plugin-styled-components'
              ]
            },
            exclude: /node_modules/
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6', '.json']
  },
  devtool: 'inline-source-map'
};
