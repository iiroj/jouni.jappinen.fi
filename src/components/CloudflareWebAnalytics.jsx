import React from 'react'

const CloudflareWebAnalytics = ({ token }) => {
    if (!token) return null

    return (
        <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${token}"}`}
        />
    )
}

export default CloudflareWebAnalytics
