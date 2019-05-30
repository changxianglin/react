import React, { Component } from 'react'
import SearchBox from './components/SearchBox';
import PopularSearch from './components/PopularSearch'

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <PopularSearch />
      </div>
    )
  }
}