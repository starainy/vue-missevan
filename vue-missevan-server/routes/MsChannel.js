const router = require('koa-router')()
const MsChannelController = require('../controllers/MsChannel')

router.get('/MsChannel', MsChannelController.MsChannel)

module.exports = router
