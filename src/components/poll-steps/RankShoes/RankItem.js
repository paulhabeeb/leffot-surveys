import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './RankItem.module.scss'
import { Select } from '@components/forms'

export default function RankItem({ actionComponent, images, name }) {
    const options = ['1', '2', '3', '4', '5']

    return (
        <li className={styles.rankItem}>
            <img
                src={images[0].item_image.url}
                alt={images[0].item_image.alt}
                className={styles.image}
            />
            <div className={styles.details}>
                <div className={styles.name}>{name}</div>
                {actionComponent}
            </div>
            <div>
                <Select
                    name={name}
                    options={options}
                    placeholder='Select a rank'
                />
            </div>
        </li>
    )
}

RankItem.propTypes = {
    actionComponent: PropTypes.node,
    images: PropTypes.array,
    name: PropTypes.string,
}
