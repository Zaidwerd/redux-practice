const express = require('express');
const path = require('path')
const app = express();
const router = require('express').Router();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require(path.join(__dirname, '/webpack.config.js'));

const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('', (req, res, next) => {
  res.sendFile('/Public/index.html')
})




const PORT = process.env.PORT | 3000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
