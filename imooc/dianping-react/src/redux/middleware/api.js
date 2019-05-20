import { get } from '../../utils/request'

//经过中间件处理的 action 所具有的标识
export const FETCH_DATA = 'FETCH DATA'

export default store => next => action => {
  const allAPI = action[FETCH_DATA]

  if(typeof allAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, schema, types } = allAPI

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

  const actionWith = data => {
    const finalAction = {...action, ...data}
    delete finalAction[FETCH_DATA]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({type: requestType}))

  return FETCH_DATA(endpoint, schema).then(
    response => next(actionWith({
      type: successType,
      response,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || '获取数据失败',
    }))
  )
}

//  执行网络请求
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return noremalizeData(data, schema)
  })
}

// 根据 schema, 将获取的数据扁平化处理
const noremalizeData = (data, schema) => {
  const { id, name } = schema 
  let kvObj = {}
  let ids = []

  if(Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item 
      ids.push(item[id])
    })
  } else {
    kvObj[data[id]] = data
    ids.push(data[id])
  }
  return {
    [name]: kvObj,
    ids,
  }
}