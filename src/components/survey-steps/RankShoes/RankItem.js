import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './RankItem.module.scss'
import { Select } from '@components/forms'

export default function RankItem({
    actionComponent,
    images,
    name,
    options,
    placeholder,
}) {
    return (
        <li className={styles.rankItem}>
            <img
                className={styles.image}
                alt={images[0].item_image.thumbnails.small.alt || ''}
                height={images[0].item_image.thumbnails.small.dimensions.height}
                src={images[0].item_image.thumbnails.small.url}
                width={images[0].item_image.thumbnails.small.dimensions.width}
            />
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                {actionComponent}
            </div>
            <div>
                <Select
                    name={name}
                    options={options}
                    placeholder={placeholder}
                />
            </div>
        </li>
    )
}

RankItem.propTypes = {
    actionComponent: PropTypes.node,
    images: PropTypes.array,
    name: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
}
