//经过中间件处理的 action 所具有的标识
export const FETCH_DATA = 'FETCH DATA'

export default store => next => action => {
  const allAPI = action[FETCH_DATA]

  if(typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, schema, types } = callAPI

  if(typeof endpoint !== 'string') {
    throw new Error('endpoint 必须为字符串类型的 URL')
  }

  if(!schema) {
    throw new Error('必须指定特定领域实体的 schema')
  }

  if(!Array.isArray(types) && types.lenght !== 3) {
    throw new Error('需要指定一个包含了 3 个 action type 的数组')
  }

  if(!types.every(type => typeof type === 'string')) {
    throw new Error('action type 必行为字符串类型')
  }

  const [requestType, successType, failureType] = types

  next({type: requestType})

  return FETCH_DATA(endpoint, schema).then(
    response => next({
      type: successType,
      response,
    }),
    error => next({
      type: failureType,
      error: error.message || '获取数据失败',
    })
  )
}