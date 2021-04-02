import React from 'react'
import * as styles from './InputLabel.module.scss'

export default function InputLabel({ label, status, ...props }) {
    return (
        <label
            className={styles.label}
            htmlFor={props.id || props.name}
        >
            {label}
            {status && <div className={styles.status}>{status}</div>}
        </label>
    )
}
