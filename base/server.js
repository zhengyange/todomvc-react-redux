var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var compiler = webpack(config);
//webpack实时打包
// var watcher = compiler.watch({},function(err, stats){
// 	console.log('build success');
// });
new WebpackDevServer(webpack(config), {
	hot: false,
	noInfo: false,
	historyApiFallback: false,
	stats: { colors: true },
	quiet: false,
	filename: "bundle.js",
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
})
.listen(3000, '127.0.0.1', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:3000');
});