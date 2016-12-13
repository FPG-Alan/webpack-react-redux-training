const path = require('path');

const webpack = require('webpack');
const htmlWP_Plugin = require('html-webpack-plugin');
const extractText_Plugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: './build',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /\.(png|jpg)$/,
			loader: "url-loader",
			query: {
				limit: 128,
				name: './img/[hash].[ext]'
			}
		},{
			test: /\.css$/,
			loader: extractText_Plugin.extract('style','css')
		},{
			test: /\.html$/,
			loader: "html"
		}]
	},
	plugins: [
		new extractText_Plugin("./[name].css"),
		new htmlWP_Plugin({
			favicon: "",
			filename: "./index.html",
			template: "./src/index.html",
			inject: true,
			hash: true,
			minify: {
				removeCommits: true,
				collapseWhitespace: false
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false
			}
		})
	]
};