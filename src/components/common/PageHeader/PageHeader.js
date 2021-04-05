import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'

import cn from 'classnames'
import * as styles from './PageHeader.module.scss'

export default function PageHeader({
    description,
    isH1,
    title,
    wrapperStyles,
}) {
    const wrapper = cn(styles.container, wrapperStyles)

    const plainTitle = RichText.asText(title)

    return (
        <div className={wrapper}>
            {isH1 ? (
                <h1 className={styles.title}>{plainTitle}</h1>
            ) : (
                <h2 className={styles.title}>{plainTitle}</h2>
            )}
            <div className={styles.body}>
                <RichText render={description} />
            </div>
        </div>
    )
}

PageHeader.propTypes = {
    description: PropTypes.array,
    isH1: PropTypes.bool,
    title: PropTypes.array,
    wrapperStyles: PropTypes.string,
}
