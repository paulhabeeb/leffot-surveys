import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Layout.module.scss'

export default function Layout({ children, id }) {
    return (
        <section className={styles.container} id={id}>
            {children}
        </section>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
}
