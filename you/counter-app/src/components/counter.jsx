import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: []
    }

    constructor() {
        super()
        // console.log("Constructor", this) must have super()
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>{ this.state.tags.map(tag => <li key = { tag }>{ tag }</li>)}</ul>
    }

    handleIncrement() {
        console.log('Increment Clicked', this)
    }

    render() { 
        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt=""/>
                <span className = {this.getBadgeClasses()}>{this.state.count}</span>
                <button onClick = {this.handleIncrement}>Increment</button>
                {this.state.tags.length === 0 && "Please create new tages!"}
                { this.renderTags() }
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