import React from 'react'
import { RichText } from 'prismic-reactjs'
import cn from 'classnames'
import * as styles from './ShoeCard.module.scss'

export default function ShoeCard({ description, images, isSelected, name, onClick }) {
    const handleClick = event => {
        onClick({
            name,
            images,
        })
    }
    
    const title = RichText.asText(name.raw)
    const wrapper = {
        backgroundImage: `url(${images[0].item_image.url})`
    }
    
    return (
        <li className={styles.shoeCard} onClick={handleClick} onKeyPress={handleClick}>
            <div
                className={cn(
                    styles.imgWrapper,
                    {
                        [styles.isSelected]: isSelected,
                    },
                )}
                style={wrapper}
                title={`Add the ${title} to your favorites.`}
            >
                <img
                    className={styles.img}
                    src={images[0].item_image.url}
                    alt={images[0].item_image.alt}
                />
            </div>
            <div className={styles.cardText}>
                <h2>{title}</h2>
                <button
                    type='button'
                    className={styles.infoButton}
                >
                    Details
                </button>
            </div>
        </li>
    )
}

ShoeCard.defaultProps = {
    isSelected: false,
}
