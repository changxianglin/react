import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

@inject('store')
@observer
class Loading extends Component {
    render() {
        const { loadingStore } = this.props.store
        return (
            <div>
                <h1>{loadingStore.title}</h1>
                <Button onClick = {loadingStore.handleRequest}>{loadingStore.content}</Button>
            </div>
        )
    }
}

export {Loading}