const Koa = require('koa')
const path = require('path')
const convert = require('koa-convert'); // 对以generator作为中间件的写法进行长期支持
const webpack = require('webpack')
const koaWebpackMiddleware = require('koa-webpack-middleware');
const webpackDevMiddleware = koaWebpackMiddleware.devMiddleware;
const webpackHotMiddleware = koaWebpackMiddleware.hotMiddleware

const config = require('../build/webpack.config.js')

const app = new Koa()
const compiler = webpack(config)

const PORT = process.env.PORT || 3333

const wdm = webpackDevMiddleware(compiler, {
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    reload: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})
app.use(convert(wdm))
app.use(convert(webpackHotMiddleware(compiler)))

const server = app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`HMR Listening at http://localhost:${PORT}`)
})
process.on('SIGTERM', () => {
    console.log('Stopping dev server')
    wdm.close()
    server.close(() => {
        process.exit(0)
    })
})

module.exports = app