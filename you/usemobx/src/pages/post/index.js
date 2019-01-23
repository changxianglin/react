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
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export { Post }