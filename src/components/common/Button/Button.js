import React from 'react'
import cn from 'classnames'
import * as styles from './Button.module.scss'

export default function Button({ error, kind, label, onClick, type }) {
    const className = cn(
        styles.button,
        {
            [styles.primary]: kind === 'primary',
            [styles.secondary]: kind === 'secondary',
        },
    )

    return (
        <>
            <button
                className={className}
                onClick={onClick}
                type={type}
            >
                {label}
            </button>
            {error && <div className={styles.errors}>{error}</div>}
        </>
    )
}
