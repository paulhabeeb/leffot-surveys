import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export default function PageHelmet({ description, image, title, url }) {
    return (
        <Helmet>
            <html lang='en' />

            {/* General tags */}
            {title && <title>{title}</title>}
            {description && <meta name='description' content={description} />}
            {image && <meta name='image' content={image} />}
            <link key='icon' rel='icon' href='/favicon.png' />

            {/* OpenGraph tags */}
            {url && (
                <meta
                    property='og:url'
                    content={`https://surveys.leffot.com/${url}`}
                />
            )}
            {title && <meta property='og:title' content={title} />}
            {description && (
                <meta property='og:description' content={description} />
            )}
            {image && <meta property='og:image' content={image} />}

            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content='leffot' />
            {title && <meta name='twitter:title' content={title} />}
            {description && (
                <meta name='twitter:description' content={description} />
            )}
            {image && <meta name='twitter:image' content={image} />}
        </Helmet>
    )
}

PageHelmet.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}
