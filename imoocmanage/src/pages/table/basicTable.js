import React from 'react'
import { Card, Table} from 'antd'

export default class BasicTable extends React.Component {
    state = {}

    componentDidMount() {
        const dataSource = [
            {
                id: "0",
                userName: 'zhangsan',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2002-01-02',
                address: '深圳市福田区大运体育公园',
                time: '09:00'
            },
            {
                id: "1",
                userName: 'lisi',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2002-01-02',
                address: '深圳市福田区大运体育公园',
                time: '09:00'
            },
            {
                id: "2",
                userName: 'wanger',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2002-01-02',
                address: '深圳市福田区大运体育公园',
                time: '09:00'
            }
        ]
        this.setState({
            dataSource
        })
    }

    render() {
        const columns = [
            {
                title: "id",
                dataIndex: "id"
            },
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "性别",
                dataIndex: "sex"
            },
            {
                title: "状态",
                dataIndex: "state"
            },
            {
                title: "爱好",
                dataIndex: "interest"
            },
            {
                title: "生日",
                dataIndex: "birthday"
            },
            {
                title: "地址",
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time"
            }
        ]
        return (
            <div>
                <Card title = "基础表格">
                    <Table
                        bordered
                        dataSource = {this.state.dataSource}
                        columns = {columns}
                        pagination = {false}
                    />
                </Card>
            </div>
        )
    }
}