import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle(
    {
        '@font-face': {
            display: 'swap',
            fontFamily: 'Spectral',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `local(''),
         url('/fonts/spectral-v7-latin-regular.woff2') format('woff2'),
         url('/fonts/spectral-v7-latin-regular.woff') format('woff')`,
        },
    },
    {
        '@font-face': {
            display: 'swap',
            fontFamily: 'Spectral',
            fontStyle: 'normal',
            fontWeight: 600,
            src: `local(''),
                 url('/fonts/spectral-v7-latin-600.woff2') format('woff2'),
                 url('/fonts/spectral-v7-latin-600.woff') format('woff')`,
        },
    },
    {
        html: {
            height: '100%',
            fontFamily: 'Spectral',
        },

        body: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: 16,
            fontWeight: '400',
            height: '100%',
            lineHeight: '1.5rem',
            margin: 0,
        },

        a: {
            color: 'inherit',
            textDecoration: 'inherit',
        },

        '*': {
            boxSizing: 'border-box',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            margin: 0,
            padding: 0,
        },

        ul: {
            listStyle: 'none',
        },
    }
)

export default Reset
