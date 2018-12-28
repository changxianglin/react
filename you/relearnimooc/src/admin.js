import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'

export default class Admin extends React.Component{
    render() {
        return (
            <Row>
                <Col span = {3}>
                    Left
                </Col>
                <Col span = {21}>
                    <Header>
                        Header
                    </Header>
                    <Row>
                        Content
                    </Row>
                    <Footer>
                        Footer
                    </Footer>
                </Col>
            </Row>
        )
    }
}