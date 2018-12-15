const handleCRank = require('./utils/handleCRank')

module.exports = {
    // [GET]板块排名，可接受板块id=xxx，若没有传id或id未找到，则返回所有板块排名
    async MsRanking (ctx) {
        let
            response,
            catalogResp = await handleCRank()
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
