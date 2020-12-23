import React from 'react'
import { css } from '@emotion/react'

const main = css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
})

const Main = ({ children }) => <main css={main}>{children}</main>

export default Main
