import React, { Component } from 'react';
import { observer, inject} from 'mobx-react'
import style from './index.module.css'

@inject('store')
@observer
class Post extends Component {
    render() {
        const { postStore } = this.props.store
        console.log(postStore)
        return (
            <div>
                <h1>这是来试验用的</h1>
                <hr />
                {
                    postStore.content.map((item) => {
                        return (
                            <div key = {item.id} className = {style.wrapper} onClick = {() => postStore.Toggle(item.id)}>
                                <div className = {style.left}>
                                    <div>{item.title}</div>
                                    <div>{item.desc}</div>
                                    <div>{item.content}</div>
                                </div>
                                <div className = {style.right}>
                                    <div className = {style.imgSite}>
                                        <img className = {postStore.icon[item.id] ? style.imgToggle : null} src = {item.icon} alt = '' />
                                    </div>
                                    <div>
                                        <div>{item.instructor}</div>
                                    </div>
                                </div>    
                                <div className = {style.imgWrapper}>
                                    <img src = {item.imgUrl} alt = '' />
                                </div>
                            </div>
                        )
                    })
                }

                <button onClick = {postStore.handleSure}>确定</button>
            </div>
        )
    }
}

export { Post }