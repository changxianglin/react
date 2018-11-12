import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Contnent } from './style'

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

}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null)(Detail)