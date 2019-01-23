import React, { Component } from 'react';
import { observer, inject} from 'mobx-react'

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
                            <div key = {item.id}>
                                <div>
                                    <div>{item.title}</div>
                                    <div>{item.desc}</div>
                                    <div>{item.content}</div>
                                </div>
                                <div>
                                    <div>
                                        <img src = {item.icon} alt = '' />
                                    </div>
                                    <div>
                                        <div>{item.instructor}</div>
                                    </div>
                                </div>    
                                <div>
                                    <img src = {item.imgUrl} alt = '' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export { Post }