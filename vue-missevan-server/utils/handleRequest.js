const axios = require('axios')
const handleResponse = require('./handleResponse')

const handleRequest = () => {

    const MyAxios = axios.create({
        transformRequest: [function (data) {
            // 将数据转换为表单数据
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    return {
        get: (URL) => {
            return handleResponse(MyAxios.get(URL))
        },
        post: (URL, postdata) => {
            return handleResponse(MyAxios.post(URL, postdata))
        },
        patch: (URL, patchdata) => {
            return handleResponse(MyAxios.patch(URL, patchdata))
        },
        put: (URL, putdata) => {
            return handleResponse(MyAxios.put(URL, putdata))
        },
        delete: (URL) => {
            return handleResponse(MyAxios.delete(URL))
        }
    }

}

module.exports = handleRequest()