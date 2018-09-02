// const express = require("express");
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const less = require('./webpack/less');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const json = require('./webpack/json');
const fonts = require('./webpack/fonts');
const react = require('./webpack/react');

const PATHS = {
  source: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: './js/[name]_01.js'
        },
        // node: {
        //     console: 'empty',
        //     fs: 'empty',
        //     net: 'empty',
        //     tls: 'empty'
        // },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/templates/index.html'
            }),
            
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    fonts(),
    images(),
    react(),
    json()
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
        common,
        extractCSS(),
        uglifyJS()
    ]);
  }
  if (env === 'development') {
    return merge([
        common,
        devserver(),
        less(),
        css()
    ]);
  }
};