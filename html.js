import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

function HTML (props) {
  const head = Helmet.rewind()
  let css
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  }

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <link rel='icon' sizes='180x180' href='/icon.png' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <link
          rel='preload'
          href={prefixLink(`/bundle.js?t=${BUILD_TIME}`)}
          as='script'
        />
        <link
          rel='preload stylesheet'
          href='https://fonts.googleapis.com/css?family=Noto+Serif:400,400i'
          as='style'
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.script.toComponent()}
        {css}
      </head>
      <body>
        <div
          id='react-mount'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          async
          src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  body: PropTypes.string.isRequired
}

export default HTML
