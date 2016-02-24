var webpack = require('webpack');
var path = require("path");
var glob = require('glob');

function getEntry() {
	var entry = {};
	glob.sync(process.cwd() + '/entry/*.js').forEach(function (name) {
		var n = name.match(/([^/]+?)\.js/)[1];
		entry[n] = './entry/'+n+'.js';
	});
	// entry['a'] = 'webpack-dev-server/client?http://localhost:3000';
	// entry['b'] = 'webpack/hot/only-dev-server';
	return entry;
}

module.exports = {
	// devtool: "eval-source-map",
	refreshEntry: function () {
		this.entry = getEntry();
	},
	entry: getEntry(),
	output: {
		path: path.join(process.cwd(), "/build"),
		// publicPath:'../build/',
		publicPath:'http://asdf:3000/public/',
		filename: '[name].js',
		sourceMapFilename: '[file].map'
	},
	resolve: {
		alias: {
			// 'zepto': path.join(process.cwd(), '..','common/js/zepto/zepto.min.js'),
			// 'zepto': 'http://localhost:3000/public/common/js/zepto/zepto.min.js',
		},
		extensions: ['', '.js', '.jsx']
	},
	externals: [
		{'react':'React'}
		,{'redux':'Redux'}
		,{'react-redux':'ReactRedux'}
		,{'redux-thunk':'ReduxThunk'}
		,{'zepto':'Zepto'}
	],
	sassLoader:{
		includePaths:path.join(__dirname, "../public/common/scss")
	},
	module: {
		// noParse:[/\/react\//,/\/redux\//],
		// 	preLoaders: [{
		// 	test: /\.js$/,
		// 	exclude: /node_modules/,
		// 	loader: 'jsxhint'
		// }],
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.less/,
				loader: 'style-loader!css-loader!less-loader'
			}, {
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader'
			}, {
				test: /\.(css)$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url-loader',
				query:{
					limit:10,
					name:'../build/buildImg/[name].[ext]'
				}
			}]
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin('common.js'),
		]
	};
