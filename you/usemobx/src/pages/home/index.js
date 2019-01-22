import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import style from './index.module.css'

@inject('store')
@observer
class Home extends Component {
    render() {
        const { homeStore } = this.props.store
        return (
            <div>
                <h1>{homeStore.title}</h1>
                <button 
                className = {style.button}
                onClick = {homeStore.changeTitle}>改变标题</button>
                <hr />
                <h3>{homeStore.title}</h3>
            </div>
        )
    }
}

export { Home }