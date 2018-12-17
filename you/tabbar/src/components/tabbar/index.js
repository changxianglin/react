import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const tarbarArr = [
    {
        img: 'icon-jialihome34',
        text: '首页',
        link: '/home'
    },
    {
        img: 'icon-fenlei',
        text: '分类',
        link: '/category'
    },
    {
        img: 'icon-gouwuche',
        text: '购物车',
        link: '/car'
    },
    {
        img: 'icon-yonghu-tianchong',
        text: '我的',
        link: '/user'
    },
]

class Tabbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    itemChange = (i) => {
        this.setState({
            index: i
        })
    }

    render() {
        return (
            <div className = 'tabbar'>
                <div className = "tabbar-content">
                {
                    tarbarArr.map((v, i) => (
                        <Link to={v.link} key = {i} className = {"tarbar-item" + (this.state.index === i ? ' active' : '')}>
                            <div className = {'iconfont ' + v.img}></div>
                            <div>{v.text}</div>
                        </Link>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Tabbar