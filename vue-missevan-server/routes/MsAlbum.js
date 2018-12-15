const router = require('koa-router')()
const MsAlbumController = require('../controllers/MsAlbum')

router.get('/MsAlbum', MsAlbumController.MsAlbum)

module.exports = router
