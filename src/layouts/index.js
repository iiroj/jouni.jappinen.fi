import React from 'react'

import 'reset.css/reset.css'
import s from './default.module.css'

export default function DefaultLayout (props) {
  const { children } = props

  return (
    <div className={s.root}>
      {children()}
    </div>
  )
}
