import React from 'react'
import style from './nomatch.module.css'

class NoMatch extends React.Component {
    render() {
        return (
            <div className = {style.content}>404</div>
        )
    }
}

export default NoMatch