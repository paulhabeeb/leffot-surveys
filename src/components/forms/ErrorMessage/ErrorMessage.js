import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import * as styles from './ErrorMessage.module.scss'

export default function ErrorMessage({ customStyles, meta }) {
    if (meta.touched && meta.error) {
        return (
            <div className={cn(styles.error, customStyles)}>{meta.error}</div>
        )
    }

    return null
}

ErrorMessage.propTypes = {
    customStyles: PropTypes.string,
    meta: PropTypes.object,
}
