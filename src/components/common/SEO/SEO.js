import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo({ description, image, title, url }) {
    return (
        <Helmet>
            {/* General tags */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {image && <meta name="image" content={image} />}

            {/* OpenGraph tags */}
            {url && <meta property="og:url" content={url} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content='leffot' />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}
