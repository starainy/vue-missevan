const catalogLeavesUrl = require('../routes/urlConfig').catalogLeavesUrl
const handleRequest = require('../utils/handleRequest')
const handleCatalog = require('./utils/handleCatalog')

module.exports = {
    // [GET]初始化分类
    async MsCatalogInit (ctx) {
        let response = await handleCatalog()
        ctx.body = response
    },
    // [POST]各板块下具体分类的内容,cid为必需
    async MsCatalogByCid (ctx) {
        let response
        // TODO: 状态码分类，如果cid的值没有相对应的该如何做
        if (ctx.request.body.cid)
            response = await handleRequest.post(catalogLeavesUrl, ctx.request.body)
        else
            response = { status: 404, msg: '未传入参数或参数不正确' }
        ctx.body = response
    }
}
