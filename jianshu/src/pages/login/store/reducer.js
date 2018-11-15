import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    login: false
})


export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state

    }
}