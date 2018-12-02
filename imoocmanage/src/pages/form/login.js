import React from 'react'
import { Card, Form, Input, Button} from 'antd'
import FormItem from 'antd/lib/form/FormItem';

const FromItem = Form.Item

class FormLogin extends React.Component {
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
                                    initialValue: 'zhangsan',
                                    rules: []
                                })(
                                    <Input placeholder = "请输入用户名" />
                                )
                            }
                        </FromItem>
                        <FromItem>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '123456',
                                    rules: []
                                })(
                                    <Input placeholder = "请输入密码" />
                                )
                            }
                        </FromItem>
                        <FromItem>
                            <Button type = "primary">登录</Button>
                        </FromItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormLogin)