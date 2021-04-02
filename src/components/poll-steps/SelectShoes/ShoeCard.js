import React, { useState } from 'react'
import { RichText } from 'prismic-reactjs'

import cn from 'classnames'
import * as styles from './ShoeCard.module.scss'
import { ShowDetailsButton } from '@components/common'
import AddButton from './AddButton'

export default function ShoeCard({
    isSelected,
    onClick,
    setModal,
    shoe,
}) {
    const [isAdding, setIsAdding] = useState(false)

    const handleClick = event => {
        event.preventDefault()
        onClick(shoe)
        setIsAdding(true)
        setTimeout(setIsAdding, 2500, false)
    }

    const title = RichText.asText(shoe.primary.item_name.raw)
    const wrapper = { backgroundImage: `url(${shoe.items[0].item_image.url})` }
    const addButton = <AddButton
        handleClick={handleClick}
        isAdding={isAdding}
        isSelected={isSelected}
        productName={title}
    />

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
                    src={shoe.items[0].item_image.url}
                    alt={shoe.items[0].item_image.alt}
                />
            </div>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.actions}>
                    {addButton}
                    <ShowDetailsButton
                        caption='Details'
                        setModal={setModal}
                        shoe={shoe}
                        styles={styles.infoButton}
                    />
                </div>
            </div>
        </li>
    )
}

ShoeCard.defaultProps = {
    isSelected: false,
}
