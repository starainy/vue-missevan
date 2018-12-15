const router = require('koa-router')()
const MsRankController = require('../controllers/MsRank')

router.get('/MsRanking', MsRankController.MsRanking)

module.exports = router
