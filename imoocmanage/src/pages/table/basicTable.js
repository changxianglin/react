import React from 'react'
import { Card, Table} from 'antd'
import axios from './../../axios/index'

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }

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
        this.request()
    }

    request = () => {
        axios.ajax({
            url: "/table/list",
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if(res.code === 0) {
                this.setState({
                    dataSource2: res.result
                })
            }
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
                dataIndex: "sex",
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                render(state) {
                    let config = {
                        "1": "咸鱼一条",
                        "2": "风华浪子",
                        "3": "北大才子",
                        "4": "百度FE",
                        "5": "创业者"
                    }
                    return config[state]
                }
            },
            {
                title: "爱好",
                dataIndex: "interest",
                render(interest) {
                    let config = {
                        "1": "游泳",
                        "2": "打篮球",
                        "3": "踢足球",
                        "4": "跑步",
                        "5": "爬山",
                        "6": "骑行",
                        "7": "桌球",
                        "8": "麦霸",
                    }
                    return config[interest]
                }
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
                <Card title = "动态渲染表格" style = {{margin: "10px 0"}}>
                    <Table
                        bordered
                        dataSource = {this.state.dataSource2}
                        columns = {columns}
                        pagination = {false}
                    />
                </Card>
            </div>
        )
    }
}