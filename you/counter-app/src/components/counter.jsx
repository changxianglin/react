import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    }

    render() { 
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/>
                <span className = {this.getBadgeClasses()}>{this.state.count}</span>
                <button>Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key = { tag }>{ tag }</li>)}
                </ul>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes
    }

}
 
export default Counter;