import axios from 'axios'

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
    }
}