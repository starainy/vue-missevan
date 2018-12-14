const cRankUrlFun = require('../routes/urlConfig').cRankUrlFun
const cRankTagsUrl = require('../routes/urlConfig').cRankTagsUrl
let cacheCRank = require('../cache/cache').cRank
const handleRequest = require('../utils/handleRequest')

const compareTimestamp = (timestamp) => {
  if (timestamp - cacheCRank.last_timestamp > 60*60*24) {
    return true
  } else {
    return false
  }
}

// 关于获取M站cRank.json文件的处理
const getResponse = async () => {
    let nowtimestamp = Math.floor(new Date().getTime() / 1000)
    let cRankResponse = null
    if (compareTimestamp(nowtimestamp)) {
        // 如果现在时间距离上次已经超过了1天
        let cRankArr = cRankUrlFun()
        for (let cRankUrlIndex = 0; cRankUrlIndex < cRankArr.length; cRankUrlIndex++) {
            try {
                cRankResponse = await handleRequest.get(cRankArr[cRankUrlIndex])
                // 一旦获取到了数据则存入缓存
                cacheCRank['data'] = cRankResponse
                cacheCRank['last_timestamp'] = nowtimestamp
                break
            } catch (error) {
                cRankResponse = error
                console.log(cRankArr[cRankUrlIndex])
                console.log(error)
            }
        }
        // 如果实在获取不到，则使用上一次的数据
        if (cRankResponse.status === 404)
            cRankResponse = cacheCRank.data
    } else {
        // 还没到1天
        cRankResponse = cacheCRank.data
    }
    return cRankResponse
}

module.exports = {
    // [GET]初始化铃声排行
    async cRankRingsInit (ctx) {
        let response = await getResponse()
        ctx.body = response['rings']
    },
    // [POST]按分类查询铃声排行。需接受分类id
    async cRankRings (ctx) {
        let response
        // TODO: 状态码分类，如果catalog的值没有相对应的该如何做
        if (ctx.request.body.catalog)
            response = await handleRequest.post(cRankTagsUrl, ctx.request.body)
        else
            response = { status: 404, msg: '未传入参数或参数不正确' }
        ctx.body = response
    },
    // [GET]板块排名，可接受板块id=xxx，若没有传id或id未找到，则返回所有板块排名
    async cRankCatalogs (ctx) {
        let
            response,
            catalogResp = await getResponse()
        if(ctx.query.id) {
            let [resp] = catalogResp['catalogs'].filter(catalog => {
                return String(catalog.id) === String(ctx.query.id)
            })
            if (resp) {
                response = resp
            } else {
                response = catalogResp['catalogs']
            }
        } else {
            response = catalogResp['catalogs']
        }
        ctx.body = response
    }
}