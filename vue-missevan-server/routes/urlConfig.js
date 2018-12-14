const timeparse = require('../utils/timeparse')

// 首页总推荐
const recommendUrl = 'http://static.missevan.com/home/sounds/201811/17/recommend_5bef73d8def9e.json'

// 铃声排行分类
const cRankTagsUrl = 'https://www.missevan.com/rings/getTags'

// 各版块下具体分类的内容
const catalogLeavesUrl = 'https://www.missevan.com/sound/leaves'

// 各版块推荐，每日0:10:47更新，并每隔20分钟更新一次（基本固定，暂未发现不固定的情况）return string
function catalogUrlFun() {
    let
        timedate = new Date()
        catalogTimeDateObj = timeparse.parseStampToObj(timedate.getTime())

        catalogBaseUrl = 'http://static.missevan.com/home/sounds/'
        catalogFullUrl = ''
        
        catalogNowTime = Math.floor(timedate.getTime() / 1000)
        catalogCompareTime = Math.floor(new Date(timedate.toLocaleDateString() + ' 0:10:47').getTime() / 1000)
        catalogTimeDistance = catalogNowTime - catalogCompareTime

    // 获取最近一次的更新地址
    if (catalogTimeDistance > 0) {
        let nearestUpdate = catalogNowTime - catalogTimeDistance % (60*20)
        catalogFullUrl = catalogBaseUrl + catalogTimeDateObj.yearNum + catalogTimeDateObj.monthNum + '/' + catalogTimeDateObj.dayNum + '/catalog_' + String(nearestUpdate) + '.json'
    } else {
        let yesterdayLastUpdate = timeparse.changeAppointedTime({ duration: 20, tyle: 'minute', timestamp: catalogCompareTime * 1000, handleType: 'subtraction' })
        let yesterdayLastUpdateObj = timeparse.parseStampToObj(yesterdayLastUpdate)
        catalogFullUrl = catalogBaseUrl + yesterdayLastUpdateObj.yearNum + yesterdayLastUpdateObj.monthNum + '/' + yesterdayLastUpdateObj.dayNum + '/catalog_' + String(yesterdayLastUpdate / 1000) + '.json'
    }

    return catalogFullUrl
}

// 排行榜信息，每日2:0:7更新(不固定，在几秒之间浮动) return Array
function cRankUrlFun () {
    let
        timedate = new Date()
        cRankTimeDateObj = timeparse.parseStampToObj(timedate.getTime())
        
        // 保留分钟及以上的时间戳
        cRankCompareTime = Math.floor(new Date(timedate.toLocaleDateString() + ' 2:0:7').getTime() / 100000)
        cRankBaseUrl = 'http://static.missevan.com/home/sounds/' + cRankTimeDateObj.yearNum + cRankTimeDateObj.monthNum + '/' + cRankTimeDateObj.dayNum + '/cRank_'
        cRankArr = []

    // 将2:0:5-2:0:15之间可能产生的路由地址全部push进数组
    for (let index = 5; index <= 15; index++) {
        cRankArr.push(cRankBaseUrl + cRankCompareTime + (index < 10 ? ('0' + index) : index) + '.json')
    }
    return cRankArr
}

module.exports = {
    recommendUrl,
    catalogUrlFun,
    catalogLeavesUrl,
    cRankUrlFun,
    cRankTagsUrl
}