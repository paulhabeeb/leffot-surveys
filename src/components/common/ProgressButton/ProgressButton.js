import React from 'react'
import cn from 'classnames'
import * as styles from './ProgressButton.module.scss'

export default function ProgressButton({ error, label, onClick, type }) {
    return (
        <>
            <button
                className={styles.button}
                onClick={onClick}
                type={type}
            >
                {label}
            </button>
            <div className={styles.errors}>{error}</div>
        </>
    )
}
