import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { checkIfNeedsLightText } from '@lib/checkIfNeedsLightText'

import cn from 'classnames'
import * as styles from './PageHeader.module.scss'

export default function PageHeader({
    backgroundColor,
    description,
    isH1,
    title,
    wrapperClassName,
}) {
    const needsLightText = checkIfNeedsLightText(backgroundColor)
    const className = cn(styles.container, wrapperClassName, {
        [styles.hasLightText]: needsLightText,
    })
    const wrapperStyles = { backgroundColor }
    const plainTitle = RichText.asText(title)

    return (
        <div className={className} style={wrapperStyles}>
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
    backgroundColor: PropTypes.string,
    description: PropTypes.array,
    isH1: PropTypes.bool,
    title: PropTypes.array,
    wrapperClassName: PropTypes.string,
}
