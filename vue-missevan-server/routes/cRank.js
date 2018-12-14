const router = require('koa-router')()
const cRankController = require('../controllers/cRank')

router.get('/cRankRingsInit', cRankController.cRankRingsInit)
router.post('/cRankRings', cRankController.cRankRings)
router.get('/cRankCatalogs', cRankController.cRankCatalogs)

module.exports = router