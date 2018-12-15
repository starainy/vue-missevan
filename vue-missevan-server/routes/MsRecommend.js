const router = require('koa-router')()
const MsRecommendController = require('../controllers/MsRecommend')

router.get('/MsRecommend', MsRecommendController.MsRecommend)

module.exports = router
