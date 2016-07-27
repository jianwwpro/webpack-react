var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var projectRoot = path.resolve(__dirname, './');

module.exports ={
	entry : [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		projectRoot+'/src/js/index.js'
	],
	output: {
		path: projectRoot+"/build",
		filename: '[name].js',
		 //publicPath: './',
	},
	module: {
		preLoaders: [
			//{
      		// test: /\.js$/,
      		// exclude: /node_modules/,
      		// loader: 'jsxhint'
    		//}
    	],
		loaders: [

			{ test: [/\.js$/, /\.jsx$/], exclude: /node_modules/,loaders: ['react-hot','jsx?harmony']},
			{ test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/, loader: 'url', query: {limit:10000,name:'[name].[ext]?[hash:7]'}},
			{
		      test: /\.less/,
		      loader: 'style-loader!css-loader!less-loader'
		    }, {
		      test: /\.(css)$/,
		      loader: 'style-loader!css-loader'
		    },
		]
	},
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: projectRoot+'/src/index.html',
      inject: true
    })
  ]
}