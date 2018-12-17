import React, { Component } from 'react';
import './index.css'

const tarbarArr = [
    {
        img: 'icon-jialihome34',
        text: '首页'
    },
    {
        img: 'icon-fenlei',
        text: '分类'
    },
    {
        img: 'icon-gouwuche',
        text: '购物车'
    },
    {
        img: 'icon-yonghu-tianchong',
        text: '我的'
    },
]

class Tabbar extends Component {
    render() {
        return (
            <div className = 'tabbar'>
                <div className = "tabbar-content">
                {
                    tarbarArr.map((v, i) => (
                        <div key = {i} className = "tarbar-item">
                            <div className = {'iconfont ' + v.img}></div>
                            <div>{v.text}</div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Tabbar