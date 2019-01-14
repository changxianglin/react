import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem } from '../style'

class Writer extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <WriterWrapper>
                {
                    list.map((item) => {
                        return <WriterItem key = {item.get('id')}>{item.get('desc')}</WriterItem>
                    })
                }
            </WriterWrapper>
        )
    }
}

export const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer)