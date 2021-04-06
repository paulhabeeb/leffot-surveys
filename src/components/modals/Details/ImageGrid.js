import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './ImageGrid.module.scss'

function Image({ alt, url }) {
    return (
        <figure
            className={styles.imageWrapper}
            style={{ backgroundImage: `url(${url}` }}
        >
            <img src={url} alt={alt || ''} className={styles.image} />
        </figure>
    )
}

Image.propTypes = {
    alt: PropTypes.string,
    url: PropTypes.string,
}

export default function ImageGrid({ images }) {
    return (
        <div className={styles.imageGrid}>
            {images.map((image, index) => (
                <Image
                    url={image.item_image.url}
                    alt={image.item_image.alt}
                    key={index}
                />
            ))}
        </div>
    )
}

ImageGrid.propTypes = {
    images: PropTypes.array,
}
