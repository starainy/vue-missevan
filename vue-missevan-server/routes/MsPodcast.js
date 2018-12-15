const router = require('koa-router')()
const MsPodcastController = require('../controllers/MsPodcast')

router.get('/MsPodcast', MsPodcastController.MsPodcast)

module.exports = router
