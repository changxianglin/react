import React from 'react'

class Todo extends React.Component{

    state = {
        item: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    render() {
        return (
            <div>
                {
                    this.state.item.map(item => {
                        return <div>{item}</div>
                    })
                }
            </div>
        )
    }
}

export default Todo