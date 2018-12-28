import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio } from 'antd'
const FormItem = Form.Item
const Option = Select.Option

class FilterForm extends React.Component {
    initFormList = () => {
        const { getFieldDecorator } = this.props.form 
        const formList = this.props.formList
    }

    render() {
        return (
            <Form>

            </Form>
        )
    }
}

export default Form.creat({})(FilterForm)