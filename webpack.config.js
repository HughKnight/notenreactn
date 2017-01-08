const htmlWebpackPlugin   = require('html-webpack-plugin')
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
          test:/\.less$/,
          loader:'style!css!less',  // -loader可以省去!
          exclude:/node_modules/
        },
        {
          test:/\.js$/,
          loader:'babel',
          exclude:/node_modules/,
          query:{
            presets:['react','es2015']
          }
        }]
    },
    plugins:[
      new htmlWebpackPlugin({
        template:'./src/index.html'
      })
    ]
}