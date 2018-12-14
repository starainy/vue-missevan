const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const json = require('koa-json')
const convert = require('koa-convert')
const onerror = require('koa-onerror')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const resource = require('koa-static')

const routes = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(convert(cors()))
app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(resource(path.join(__dirname, './public')))

app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routes.routes(), routes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app
