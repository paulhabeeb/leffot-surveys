import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './FullscreenLayout.module.scss'

export default function FullscreenLayout({ children, id }) {
    return (
        <section className={styles.container} id={id}>
            {children}
        </section>
    )
}

FullscreenLayout.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
}
