const monthEnum = [
    '01','02','03','04','05','06',
    '07','08','09','10','11','12',
]

const dayEnum = [
    '01','02','03','04','05','06','07','08','09','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','04','25','26','27','28','29','30', '31',
]

const timeEnum = [
    '00','01','02','03','04','05','06','07','08','09',
    '10','11','12','13','14','15','16','17','18','19',
    '20','21','22','23','04','25','26','27','28','29',
    '30','31','32','33','34','35','36','37','38','39',
    '40','41','42','43','44','45','46','47','48','49',
    '50','51','52','53','54','55','56','57','58','59'
]

const EnumFun = (date) => {
    date = date || new Date()
    let yearNum = String(date.getFullYear())
    let monthNum = monthEnum[date.getMonth()]
    let dayNum = dayEnum[date.getDate()-1]
    let hourNum = timeEnum[date.getHours()]
    let minNum = timeEnum[date.getMinutes()]
    let secNum = timeEnum[date.getSeconds()]
    return {
        yearNum,
        monthNum,
        dayNum,
        hourNum,
        minNum,
        secNum
    }
}

const timeparse = {
    /**
     * 时间戳转换为指定格式的字符串
     * @param {Number} timestamp 时间戳
     * @param {String} type 由'YYYY'、'MM'、'DD'、'hh'、'mm'、'ss'组合的返回格式
     */
    parseStampToFormat (timestamp, type) {
        let _date
        if ( timestamp ) {
            _date = new Date(timestamp)
        } else {
            _date = new Date()
        }

        let parseDatetime
        let handleNum = EnumFun(_date)

        type = type || 'YYYY/MM/DD hh:mm:ss'

        parseDatetime = type
            .replace('YYYY', handleNum.yearNum)
            .replace('MM', handleNum.monthNum)
            .replace('DD', handleNum.dayNum)
            .replace('hh', handleNum.hourNum)
            .replace('mm', handleNum.minNum)
            .replace('ss', handleNum.secNum)
        
        return parseDatetime
    },
    /**
     * 时间戳转换为可获取年月日分时秒的对象
     * @param {Number} timestamp 时间戳
     * @param {Boolean} type 为true则返回带0版本，否则返回不带版本
     */
    parseStampToObj (timestamp, type) {
        let _date
        if ( timestamp ) {
            _date = new Date(timestamp)
        } else {
            _date = new Date()
        }

        if (type) {
            return EnumFun(_date)
        } else {
            return {
                yearNum: String(_date.getFullYear()),
                monthNum: String(_date.getMonth() + 1),
                dayNum: String(_date.getDate()),
                hourNum: String(_date.getHours()),
                minNum: String(_date.getMinutes()),
                secNum: String(_date.getSeconds())
            }
        }
    },
    /**
     * 获取当前时间
     * @param {String} 由'YYYY'、'MM'、'DD'、'hh'、'mm'、'ss'组合的返回格式
     * @returns {String} 返回指定格式的时间
     */
    getNowDatetime (type) {
            let timestamp = new Date().getTime()
            let nowDatetime = this.parseStampToFormat(timestamp, type)
            return nowDatetime
    },
    /**
     * 加减时间
     * @param {Object} req 接收参数有4个属性，默认当前时间加1天
     * req.duration 持续时间
     * req.type 接收'day'/'hour'/'minute'/'second'四种选项
     * req.timestamp 开始的时间戳
     * req.handleType 处理类型，接收加法'addition'/减法'subtraction'
     * @returns {Number} 返回处理完成的时间戳
     */
    changeAppointedTime (req) {
        let 
            _typeDuration
            _duration = Number(req.duration) || 1
            _timestamp = req.timestamp || new Date().getTime()
            _handleType = req.handleType || 'addition'
        switch (_type || 'day') {
            case 'day':
                _typeDuration = 1000*60*60*24*_duration
                break;
            case 'hour':
                _typeDuration = 1000*60*60*_duration
                break;
            case 'minute':
                _typeDuration = 1000*60*_duration
                break;
            case 'second':
                _typeDuration = 1000*_duration
                break;
            default:
                break;
        }
        if (_handleType === 'addition') {
            _timestamp += _typeDuration
        } else if (_handleType === 'subtraction') {
            _timestamp -= _typeDuration
        }
        return  _timestamp
    }
}

module.exports = timeparse
