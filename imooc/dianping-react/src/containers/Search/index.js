import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import SearchBox from './components/SearchBox';
import PopularSearch from './components/PopularSearch'
import SearchHistory from './components/SearchHistory'
import { 
  action as searchActions, 
  getRelatedKeywords, 
  getPopularKeywords,
  getInputText,
  getHistoryKeywords,
} from '../../redux/modules/search'

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <PopularSearch />
        <SearchHistory />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    relatedKeywords: getRelatedKeywords(state),
    inputText: getInputText(state),
    popularKeywords: getPopularKeywords(state),
    historyKeywords: getHistoryKeywords(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)