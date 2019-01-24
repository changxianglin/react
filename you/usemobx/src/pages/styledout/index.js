import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import style from './index.module.css'

@inject('store')
@observer
class StyledOut extends Component {
    render() {
        const { styledStore } = this.props.store
        return (
            <div>
                <h3 className = {style.title}>{styledStore.title}</h3>
                <p className = {style.content}>{styledStore.article}</p>
            </div>
        )
    }
}

export { StyledOut } 