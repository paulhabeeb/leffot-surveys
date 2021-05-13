import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { checkIfNeedsLightText } from '@lib/checkIfNeedsLightText'

import cn from 'classnames'
import * as styles from './PageHeader.module.scss'

export default function PageHeader({
    backgroundColor,
    bodyWidth,
    description,
    isH1,
    title,
    wrapperClassName,
}) {
    const plainTitle = RichText.asText(title)
    const needsLightText = checkIfNeedsLightText(backgroundColor)
    const wrapper = cn(styles.container, wrapperClassName, {
        [styles.hasLightText]: needsLightText,
    })
    const wrapperStyles = { backgroundColor }
    const body = cn(styles.body, {
        [styles.slim]: bodyWidth === 'narrow',
    })

    return (
        <div className={wrapper} style={wrapperStyles}>
            {isH1 ? (
                <h1 className={styles.title}>{plainTitle}</h1>
            ) : (
                <h2 className={styles.title}>{plainTitle}</h2>
            )}
            <div className={body}>
                <RichText render={description} />
            </div>
        </div>
    )
}

PageHeader.propTypes = {
    backgroundColor: PropTypes.string,
    bodyWidth: PropTypes.string,
    description: PropTypes.array,
    isH1: PropTypes.bool,
    title: PropTypes.array,
    wrapperClassName: PropTypes.string,
}
