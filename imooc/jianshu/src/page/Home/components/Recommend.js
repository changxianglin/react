import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendWrapperItem } from '../style'

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return <RecommendWrapperItem  imgUrl = {item.get('imgUrl')} key = {item.get('id')} />
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list : state.getIn(['home', 'recommendList'])
})

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)