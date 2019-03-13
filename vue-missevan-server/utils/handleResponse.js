const createHttpError = (code, msg) => {
    const err = new Error(msg);
    err.code = code;
    return err;
};

// 处理http响应逻辑
const handleResponse = request => {
    return new Promise((resolve, reject) => {
        request.then(resp => {
            const data = resp.data
            resolve(data)
        }).catch(error => {
            const resp = error.response
            reject({status: resp.status, message:resp.statusText})
        })
    })
};

module.exports = handleResponse
