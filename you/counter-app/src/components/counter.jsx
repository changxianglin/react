import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if(prevProps.counter.value !== this.props.counter.value) {
            // ajax call and get new data form the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount')
    }

    state = {
        value: this.props.counter.value,
        imageUrl: 'https://picsum.photos/200',
        tags: []
    }

    // constructor() {
    //     super()
    //     // console.log("Constructor", this) must have super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>{ this.state.tags.map(tag => <li key = { tag }>{ tag }</li>)}</ul>
    }

    handleIncrement = product => {
        console.log(product)
        // console.log('Increment Clicked', this)
        // this.state.count++
        this.setState({
            value: this.state.value + 1
        })
    }

    doHandleIncrement = () => {
        this.handleIncrement({id: 1})
    }

    render() { 
        console.log('Counters - Rendered')
 
        return (
            <React.Fragment>
                { this.props.children }
                <h4>{this.props.id}</h4>
                <img src={this.state.imageUrl} alt=""/>
                <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick = {() => this.props.onIncrement(this.props.counter)}
                >Increment</button>
                <button 
                    onClick = {() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
                {this.state.tags.length === 0 && "Please create new tages!"}
                { this.renderTags() }
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero': value
    }

}
 
export default Counter;