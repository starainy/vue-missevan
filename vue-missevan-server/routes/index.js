const Router = require('koa-router')
const cRank = require('./cRank')
const catalog = require('./catalog')

const router = Router()
router.prefix('/api')

router.use(cRank.routes(), cRank.allowedMethods())
router.use(catalog.routes(), catalog.allowedMethods())

module.exports = router