var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server')
	config = require('./webpack.config')
	;

var proxy = {
	"/xxx/*":{target:"http://xxxxx:81",host:"xxxx:81"}
}
var compiler = webpack(config);
var app = new WebpackDevServer(compiler,{
	publicPath: config.output.publicPath,
	proxy: proxy,
	hot: true,
	noInfo: false,
	historyApiFallback: true,
	states:{
		colors:true,
		chunks:false
	}

});
var hotMiddleware = require('webpack-hot-middleware')(compiler);
compiler.plugin('compliation',function(compliation){
	compliation.plugin('html-webpack-plugin-after-emit',function(data,cb){
		hotMiddleware.publish({action:'reload'});
		cb();
	});
});

app.use(hotMiddleware);

app.listen(3001,'localhost', function(err,result){
	if(err){
		console.log(err);
	}
	console.log('服务器启动 : http://localhost:3001');
});