import { connect } from 'react-redux'
import {
  setFilter,
} from '../action'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
  filter: state.filter,
})

const maptDispatchToProps = (dispatch) => ({
  setFilter: text => dispatch(setFilter(text)),
})

export default connect(mapStateToProps, maptDispatchToProps)(Footer)