import React from 'react'
import Helmet from 'react-helmet'

const isProduction = process.env.NODE_ENV === 'production'

let stylesStr
if (isProduction) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default function HTML (props) {
  const head = Helmet.rewind()
  const css = isProduction ? <style id='gatsby-inlined-css' dangerouslySetInnerHTML={{ __html: stylesStr }} /> : null

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <link rel='icon' sizes='600x600' href='/icon.png' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <link
          rel='preload stylesheet'
          href='https://fonts.googleapis.com/css?family=Noto+Serif:400,400i'
          as='style'
        />
        {props.headComponents}
        {css}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
      </head>
      <body>
        <div id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
