const config = require('./config/index');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		filename: './[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: config.app.env,
	devServer: {
		hot: true,
		open: true,
		port: config.app.port || 3000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpg|png|gif|woff|eot|ttf|svg|ico|mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 90000,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Bases Universitarias',
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
};
