import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import * as styles from './InputLabel.module.scss'

export default function InputLabel({
    label,
    status,
    isVisuallyHidden,
    ...props
}) {
    const className = cn(styles.label, {
        visuallyHidden: isVisuallyHidden,
    })

    return (
        <label className={className} htmlFor={props.id || props.name}>
            {label}
            {status && <div className={styles.status}>{status}</div>}
        </label>
    )
}

InputLabel.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
}
