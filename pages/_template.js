import React, { PropTypes } from 'react'
import 'reset.css/reset.css'
import './_template.scss'

export default function Template (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

Template.propTypes = {
    children: PropTypes.object.isRequired
}
