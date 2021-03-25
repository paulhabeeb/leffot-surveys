import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'
import cn from 'classnames'
import * as styles from './ShoeCard.module.scss'
import AddButton from './AddButton'

export default function ShoeCard({
    description,
    images,
    isSelected,
    name,
    onClick,
    setModal,
}) {
    const [isAdding, setIsAdding] = useState(false)
    const handleClick = event => {
        event.preventDefault()
        onClick({
            name,
            images,
        })
        setIsAdding(true)
        setTimeout(setIsAdding, 2500, false)
    }
    const handleDetailsClick = event => {
        event.preventDefault()
        setModal({
            isOpen: true,
            shoe: {
                name: name,
                description: description,
                images,
            },
        })
    }

    const title = RichText.asText(name.raw)
    const wrapper = { backgroundImage: `url(${images[0].item_image.url})` }

    return (
        <li>
            <div
                className={cn(
                    styles.imgWrapper,
                    { [styles.isSelected]: isSelected },
                )}
                style={wrapper}
            >
                <img
                    className={styles.img}
                    src={images[0].item_image.url}
                    alt={images[0].item_image.alt}
                />
            </div>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.actions}>
                    <AddButton
                        handleClick={handleClick}
                        isAdding={isAdding}
                        isSelected={isSelected}
                        productName={title}
                    />
                    <button
                        type='button'
                        className={styles.infoButton}
                        onClick={handleDetailsClick}
                        onKeyPress={handleDetailsClick}
                    >
                        Details
                    </button>
                </div>
            </div>
        </li>
    )
}

ShoeCard.defaultProps = {
    isSelected: false,
}
