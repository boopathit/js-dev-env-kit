/**
 * Created by boopathi on 18-08-2017.
 */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from "../webpack.config.dev"

const port = 3001;

const app = express();
const compiler = webpack(webpackConfig);
/*eslint-disable no-console*/
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err)
        console.log(err);
    else
        open('http://localhost:' + port);
});
