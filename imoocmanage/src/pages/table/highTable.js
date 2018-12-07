import React from 'react'
import { Card, Table, Modal, Button, message, Badge} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils';

export default class HighTable extends React.Component {
    state = {

    }

    param = {
        page: 1
    }

    componentDidMount () {
        this.request()
    }

    request = () => {
        let _this = this
        axios.ajax({
            url: "/table/high/list",
            data: {
                params: {
                    page: this.param.page
                }
            }
        }).then((res) => {
            if(res.code === 0) {
                res.result.list.map((item, index) => {
                    item.key = index
                })
                this.setState({
                    dataSource: res.result.list
                })
            }
        })
    }

    handleChange = (pagination, filters, sorter) => {
        console.log(sorter)
        this.setState({
            sortOder: sorter.sortOder
        })
    }

    handleDelete = (item) => {
        let id = item.id
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功')
                this.request()
            }
        })
    }

    render() {
        const columns2 = [
            {
                title: "id",
                dataIndex: "id",
                fixed: "left",
                width: 80
            },
            {
                title: "用户名",
                dataIndex: "userName",
                fixed: "left",
                width: 80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
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
                width: 80,
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
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "生日",
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "地址",
                dataIndex: "address",
                fixed: 'right',
                width: 120
            },
            {
                title: "早起时间",
                dataIndex: "time",
                fixed: 'right',
                width: 80
            }
        ]

        const columns = [
            {
                title: "id",
                dataIndex: "id",
                width: 80
            },
            {
                title: "用户名",
                dataIndex: "userName",
                width: 80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
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
                width: 80,
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
                dataIndex: "birthday",
                width: 120
            },
            {
                title: "地址",
                dataIndex: "address",
                width: 120
            },
            {
                title: "早起时间",
                dataIndex: "time",
                width: 80
            }
        ]

        const columns3 = [
            {
                title: "id",
                dataIndex: "id",
            },
            {
                title: "用户名",
                dataIndex: "userName",
            },
            {
                title: "性别",
                dataIndex: "sex",
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: "年龄",
                dataIndex: "age",
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOder: this.state.sortOder
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
                dataIndex: "birthday",
            },
            {
                title: "地址",
                dataIndex: "address",
            },
            {
                title: "早起时间",
                dataIndex: "time",
            }
        ]

        const columns4 = [
            {
                title: "id",
                dataIndex: "id",
            },
            {
                title: "用户名",
                dataIndex: "userName",
            },
            {
                title: "性别",
                dataIndex: "sex",
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: "年龄",
                dataIndex: "age",
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOder: this.state.sortOder
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
                        "1": <Badge status="sucess" text = "成功" />,
                        "2": <Badge status="error" text = "保存" />,
                        "3": <Badge status="default" text = "正常" />,
                        "4": <Badge status="processing" text = "进行中" />,
                        "5": <Badge status="warning" text = "警告" />
                    }
                    return config[interest]
                }
            },
            {
                title: "生日",
                dataIndex: "birthday",
            },
            {
                title: "地址",
                dataIndex: "address",
            },
            {
                title: "操作",
                render: (text, item) => {
                    return <Button size = "small" onClick = {(item) => {this.handleDelete(item)}}>删除</Button>
                }
            }
        ]

        return (
            <div>
                <Card title = "头部固定">
                    <Table
                        bordered
                        dataSource = {this.state.dataSource}
                        columns = {columns}
                        pagination = {false}
                        scroll = {{y: 240}}
                    />
                </Card>
                <Card title = "左侧固定" style = {{margin: "10px 0"}}>
                    <Table
                        bordered
                        dataSource = {this.state.dataSource}
                        columns = {columns2}
                        pagination = {false}
                        scroll = {{x: 2760}}
                    />
                </Card>
                <Card title = "表格排序" style = {{margin: "10px 0"}}>
                    <Table
                        bordered
                        dataSource = {this.state.dataSource}
                        columns = {columns3}
                        pagination = {false}
                        onChange = {this.handleChange}
                    />
                </Card>
                <Card title = "操作按钮" style = {{margin: "10px 0"}}>
                    <Table
                        bordered
                        dataSource = {this.state.dataSource}
                        columns = {columns4}
                        pagination = {false}
                    />
                </Card>
            </div>
        )
    }
}