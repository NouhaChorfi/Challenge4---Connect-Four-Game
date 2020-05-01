const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './client/src/index.jsx',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'bindle.js',
      publicPath: '/',
   },
   devServer: {
        //historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      
   },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            }
          
      ]
    },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'client/dist/index.html' ),
         filename: 'index.html'
      })
   ],
   mode: 'development'
  };