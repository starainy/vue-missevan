const handleRequest = require('../utils/handleRequest')
let recommendUrl = require('../routes/urlConfig').recommendUrl
let cacheRecommend = require('../cache/cache').recommend

module.exports = {
    // [GET]首页热门播主
    async MsPodcast (ctx) {
        let response = await handleRequest.get(recommendUrl)
        if (response.status === 404)
            response = cacheRecommend.data
        ctx.body = response['anchors']
    }
}
