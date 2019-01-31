
//经过中间件处理的 action 所具有的标识
export const FETCH_DATA = 'FETCH DATA'

export default store => next => action => {
    const callAPI = action[FETCH_DATA] 
    if(typeof callAPI === 'undefined') {
        return next(action)
    }
    
    const { endpoint, schema, types } = callAPI
    if(typeof endpoint !== 'string') {
        throw new Error('endpoint 必须为字符串类型的 URL')
    }
    if(!schema ) {
        throw new Error('必须指定领域实体的 schema')
    }
    if(!Array.isArray(types) && types.length !== 3) {
        throw new Error('需要指定一个包含了 3 个 action type 的数组')
    }
    if(!types.every(types => typeof type === 'string')) {
        throw new Error('actions type 必须为字符串类型')
    }

    cosnt [requestType, successType, failureType] = types
    next({type: requestType})
    return fetechData(endpoint, schema).then(
        response => next({
            type: successType,
            response
        }),
        error => next({
            type: failureType,
            error: error.message || '获取数据失败'
        })
    )
}