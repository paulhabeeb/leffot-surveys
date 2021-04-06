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
                    alt={image.item_image.thumbnails.medium.alt}
                    height={
                        image.item_image.thumbnails.medium.dimensions.height
                    }
                    url={image.item_image.thumbnails.medium.url}
                    width={image.item_image.thumbnails.medium.dimensions.width}
                    key={index}
                />
            ))}
        </div>
    )
}

ImageGrid.propTypes = {
    images: PropTypes.array,
}
