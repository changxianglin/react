import React from 'react'
import { Card, Form, Button, Input, Checkbox, Radio, Select, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option

class FormRegister extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        }

        return (
            <div>
                <Card title = "注册表单">
                    <Form layout = "horizontal">
                        <FormItem label = "用户名" {...formItemLayout}>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        }
                                    ]
                                })(
                                    <Input placeholder = "请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label = "密码" {...formItemLayout}>
                            {
                                getFieldDecorator("userPwd", {
                                    initialValue: '',
                                })(
                                    <Input type = "password" placeholder = "请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label = "性别" {...formItemLayout}>
                            {
                                getFieldDecorator("sex", {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value = "1">男</Radio>
                                        <Radio value = "2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label = "年龄" {...formItemLayout}>
                            {
                                getFieldDecorator("age", {
                                    initialValue: 18,
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label = "当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator("state", {
                                    initialValue: "2",
                                })(
                                    <Select>
                                        <Option value = "1">咸鱼一条</Option>
                                        <Option value = "2">风华浪子</Option>
                                        <Option value = "3">北大才子一枚</Option>
                                        <Option value = "4">百度FE</Option>
                                        <Option value = "5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label = "爱好" {...formItemLayout}>
                            {
                                getFieldDecorator("interest", {
                                    initialValue: ['2', '5'],
                                })(
                                    <Select mode = "multiple">
                                        <Option value = "1">游泳</Option>
                                        <Option value = "2">打篮球</Option>
                                        <Option value = "3">踢足球</Option>
                                        <Option value = "4">跑步</Option>
                                        <Option value = "5">爬山</Option>
                                        <Option value = "6">骑行</Option>
                                        <Option value = "7">桌球</Option>
                                        <Option value = "8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)