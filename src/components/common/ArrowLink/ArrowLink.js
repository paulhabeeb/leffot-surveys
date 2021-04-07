import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './ArrowLink.module.scss'

export default function ArrowLink({ title, url }) {
    return (
        <a href={url} className={styles.link}>
            {title}
        </a>
    )
}

ArrowLink.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
}
