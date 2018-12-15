let cacheCatalog = require('../../cache/cache').catalog
const handleRequest = require('../../utils/handleRequest')
const catalogUrlFun = require('../../routes/urlConfig').catalogUrlFun

const compareTimestamp = (timestamp) => {
    if (timestamp - cacheCatalog.last_timestamp > 60*20) {
        return true
    } else {
        return false
    }
}

// 关于M站catalog.json文件的处理
const getResponse = async () => {
    let nowtimestamp = Math.floor(new Date().getTime() / 1000)
    let catalogResponse = null
    console.log(catalogUrlFun())
    if (compareTimestamp(nowtimestamp)) {
        // 如果现在时间距离上次已经超过了20分钟
        let catalogUrl = catalogUrlFun()
        try {
            catalogResponse = await handleRequest.get(catalogUrl)
            // 一旦获取到了数据则存入缓存
            cacheCatalog['data'] = catalogResponse
            cacheCatalog['last_timestamp'] = nowtimestamp
        } catch (error) {
            catalogResponse = error
            console.log(catalogUrl)
            console.log(error)
        }
        // 如果实在获取不到，则使用上一次的数据
        if (catalogResponse.status === 404)
            catalogResponse = cacheCatalog.data
    } else {
        // 还没到20分钟
        catalogResponse = cacheCatalog.data
    }
    return catalogResponse
}

module.exports = getResponse
