import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'
import style from './index.module.css'
import { Table, Button } from 'antd'

@inject('store')
@observer
class Tables extends Component {

    handleToggle = () => {
        let doms = document.querySelector('#testTab')
        doms.classList.toggle('tableShow')
    }

    render() {
        const { tablesStore } = this.props.store
        return (
            <div>
                <h3>表格例子</h3>
                <Table 
                dataSource={tablesStore.dataSource} 
                columns={tablesStore.columns}
                scroll = {{y: 120}}
                pagination = {false}
                 />
                <hr />
                <Table 
                dataSource={tablesStore.dataSource}
                columns={tablesStore.columns2}
                pagination = {false}
                scroll = {{x: 20, y: 200}}
                 />
                 <hr />
                 <Button onClick = {this.handleToggle}>开个一个表格</Button>
                 <div id = 'testTab' className = {style.tables}>
                    <Table 
                    dataSource={tablesStore.dataSource}
                    columns={tablesStore.columns3}
                    pagination = {false}
                    scroll = {{x: 20, y: 200}}
                    /> 
                 </div>
            </div>
        )
    }
}

export { Tables }