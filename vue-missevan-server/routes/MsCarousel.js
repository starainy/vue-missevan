const router = require('koa-router')()
const MsCarouselController = require('../controllers/MsCarousel')

router.get('/MsCarousel', MsCarouselController.MsCarousel)

module.exports = router
