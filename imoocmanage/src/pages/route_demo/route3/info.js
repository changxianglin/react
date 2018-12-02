import React from 'react'

export default class Info extends React.Component {
    render() {
        return (
            <div>
                这里显示动态路由。
                值是：{this.props.match.params.mainId}
            </div>
        )
    }
}