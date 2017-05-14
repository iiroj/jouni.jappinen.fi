import React, { Component, PropTypes } from 'react'

import 'reset.css/reset.css'
import s from './default.module.css'

export default class DefaultLayout extends Component {
    render() {
        const { location, children } = this.props

        return (
            <div className={s.root}>
                {children}
            </div>
        )
    }
}
