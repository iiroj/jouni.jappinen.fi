import React, { PropTypes } from 'react'
import './_template.scss'

function Template (props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.object.isRequired
}

export default Template
