const cRankTagsUrl = require('../routes/urlConfig').cRankTagsUrl
const handleRequest = require('../utils/handleRequest')
const handleCRank = require('./utils/handleCRank')

module.exports = {
    // [GET]初始化铃声排行
    async MsRingsInit (ctx) {
        let response = await handleCRank()
        ctx.body = response['rings']
    },
    // [POST]按分类查询铃声排行。需接受分类id
    async MsRings (ctx) {
        let response
        // TODO: 状态码分类，如果catalog的值没有相对应的该如何做
        if (ctx.request.body.catalog)
            response = await handleRequest.post(cRankTagsUrl, ctx.request.body)
        else
            response = { status: 404, msg: '未传入参数或参数不正确' }
        ctx.body = response
    },
}
