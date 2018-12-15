const router = require('koa-router')()
const MsRingsController = require('../controllers/MsRings')

router.get('/MsRingsInit', MsRingsController.MsRingsInit)
router.post('/MsRings', MsRingsController.MsRings)

module.exports = router
