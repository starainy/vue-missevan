const handleRequest = require('../utils/handleRequest')
let recommendUrl = require('../routes/urlConfig').recommendUrl
let cacheRecommend = require('../cache/cache').recommend

module.exports = {
    // [GET]首页轮播图
    async MsCarousel (ctx) {
        let response = await handleRequest.get(recommendUrl)
        if (response.status === 404)
            response = cacheRecommend.data
        ctx.body = response['links']
    }
}
