import { connect } from "react-redux";
import Footer from "../components/Footer";
import { setFilter } from "../action";

const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)