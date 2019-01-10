import React from 'react'

class Todo extends React.Component{

    state = {
        item: [1, 2, 3, 4, 5, 6, 7, 8, 9],

        item2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        
        item3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }

    render() {
        return (
            <div>

                {
                    this.state.item.map((item, index) => {
                        return <div key = {index}>{item}</div>
                    })
                }

                {
                    this.state.item2.map((item, index) => {
                        return <span key = {index}>{item}</span>
                    })
                }

                {
                    this.state.item3.map((item, index) => {
                        return <div key = {index}>{item}</div>
                    })
                }

            </div>
        )
    }
}

export default Todo