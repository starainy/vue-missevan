const router = require('koa-router')()
const MsCatalogController = require('../controllers/MsCatalog')

router.get('/MsCatalogInit', MsCatalogController.MsCatalogInit)
router.post('/MsCatalogByCid', MsCatalogController.MsCatalogByCid)

module.exports = router
