let cacheCRank = require('../../cache/cache').cRank
const handleRequest = require('../../utils/handleRequest')
const cRankUrlFun = require('../../routes/urlConfig').cRankUrlFun

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

module.exports = getResponse
