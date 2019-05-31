import React, { Component } from 'react'
import ShopList from './components/ShopList'
import SearchHeader from './components/SearchHeader';
import KeywordBox from './components/KeywordBox';
import Banner from '../../components/Banner';

export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader 
          onBack = {this.handleBack} 
          onSearch = {this.handelSearch} 
          />
        <KeywordBox text = 'text' />
        <Banner dark />
        <ShopList />
      </div>
    )
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  handelSearch = () => {
    this.props.history.push('/search')
  }
}
