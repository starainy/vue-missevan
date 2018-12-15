const Router = require('koa-router')
// cRank数据
const MsRank = require('./MsRank')
const MsRings = require('./MsRings')
// catalog数据
const MsCatalog = require('./MsCatalog')
// recommend数据
const MsAlbum = require('./MsAlbum')
const MsCarousel = require('./MsCarousel')
const MsChannel = require('./MsChannel')
const MsPodcast = require('./MsPodcast')
const MsRecommend = require('./MsRecommend')

const router = Router()
router.prefix('/api')

router.use(MsRank.routes(), MsRank.allowedMethods())
router.use(MsRings.routes(), MsRings.allowedMethods())

router.use(MsCatalog.routes(), MsCatalog.allowedMethods())

router.use(MsAlbum.routes(), MsAlbum.allowedMethods())
router.use(MsCarousel.routes(), MsCarousel.allowedMethods())
router.use(MsChannel.routes(), MsChannel.allowedMethods())
router.use(MsPodcast.routes(), MsPodcast.allowedMethods())
router.use(MsRecommend.routes(), MsRecommend.allowedMethods())

module.exports = router
