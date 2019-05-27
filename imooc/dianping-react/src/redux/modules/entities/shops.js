import createReducer from '../../../utils/createReducer'

const shema = {
  name: 'shops',
  id: 'id',
}

const reducer = createReducer(shema.name)

export default reducer