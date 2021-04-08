import React from 'react'
import PropTypes from 'prop-types'
import { checkIfNeedsLightText } from '@lib/checkIfNeedsLightText'

import cn from 'classnames'
import * as styles from './FullscreenLayout.module.scss'

export default function FullscreenLayout({ backgroundColor, children, id }) {
    const needsLightText = checkIfNeedsLightText(backgroundColor)
    const className = cn(styles.container, {
        [styles.hasLightText]: needsLightText,
    })
    const themeStyles = { backgroundColor }

    return (
        <section className={className} id={id} style={themeStyles}>
            {children}
        </section>
    )
}

FullscreenLayout.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
}
