import React from 'react'
import { Button, Input } from 'antd'
import { inject, observer} from 'mobx-react'

@inject("TestStore")
@observer
class Test extends React.Component {

    handleCan = (event) => {
        const { TestStore } = this.props
        TestStore.handleAdd(event.target.value)
    }

    render() {
        const { todolist, todoNum, add, handleAdd, bridge } = this.props.TestStore
        return (
            <div>
                <p>you have {todoNum} things todo.</p>
                <Input type = "text" placeholder ='Enter a things' value = {bridge} onChange = {this.handleCan} />
                <Button onClick = {() => add()}>Add</Button>
                {
                    todolist.map((item, index) => <li key = {index}>{item}</li>)
                }
            </div>
        )
    }
}

export default Test