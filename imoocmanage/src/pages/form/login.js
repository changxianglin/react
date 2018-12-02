import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem';

const FromItem = Form.Item

class FormLogin extends React.Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if(!err) {
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单学习，当前密码为：${userInfo.userPwd}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form 
        return (
            <div>
                <Card title = "登录行内表单">
                    <Form layout = "inline">
                        <FromItem>
                            <Input placeholder = "请输入用户名" />
                        </FromItem>
                        <FromItem>
                            <Input placeholder = "请输入密码" />
                        </FromItem>
                        <FromItem>
                            <Button type = "primary">登录</Button>
                        </FromItem>
                    </Form>
                </Card>
                <Card title = "登录水平表单" style = {{marginTop: "10px"}}>
                    <Form layout = "horizontal" style = {{width: "300px"}}>
                        <FromItem>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        },
                                        {
                                           min: 5,
                                           max: 10,
                                           message: "长度不在范围内" 
                                        },
                                        {
                                           pattern: new RegExp("^\\w+$", "g"),
                                           message: "用户名必须为英文字母或数字" 
                                        }
                                    ]
                                })(
                                    <Input prefix = {<Icon type = "user" />} placeholder = "请输入用户名" />
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator("userPwd", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "密码不能为空"
                                        }
                                    ]
                                })(
                                    <Input prefix = {<Icon type = "lock" />} type = "password" placeholder = "请输入密码" />
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator("remember", {
                                    valuePropName: "checked",
                                    initialValue: true,
                                    rules: []
                                })(
                                   <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href = "#" style = {{float: "right"}}>忘记密码</a>
                        </FromItem>
                        <FromItem>
                            <Button type = "primary" onClick = {this.handleSubmit}>登录</Button>
                        </FromItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormLogin)