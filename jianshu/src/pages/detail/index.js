import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Contnent } from './style'
import { actionCreators } from './store'

class Detail extends Component{
    render() {
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Contnent dangerouslySetInnerHTML = {{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail()
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail() {
        dispatch(actionCreators.getDetail())
    }
})

export default connect(mapState, mapDispatch)(Detail)