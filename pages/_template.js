import React, { Component, PropTypes } from 'react'

import './_template.scss'

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
