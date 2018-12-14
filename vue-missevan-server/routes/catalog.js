const router = require('koa-router')()
const catalogController = require('../controllers/catalog')

router.get('/catalogInit', catalogController.catalogInit)
router.post('/catalogByCid', catalogController.catalogByCid)

module.exports = router