import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import * as styles from './Button.module.scss'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Button({
    error,
    kind,
    isSubmitting,
    label,
    onClick,
    type,
}) {
    const className = cn(styles.button, {
        [styles.primary]: kind === 'primary',
        [styles.secondary]: kind === 'secondary',
    })

    return (
        <>
            <button
                className={className}
                onClick={onClick}
                type={type}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <span className={styles.submitting}>
                        <ClipLoader
                            color='var(--color-white)'
                            loading={true}
                            size={20}
                        />
                        Submitting
                    </span>
                ) : (
                    label
                )}
            </button>
            {error && <div className={styles.errors}>{error}</div>}
        </>
    )
}

Button.propTypes = {
    error: PropTypes.string,
    kind: PropTypes.string,
    isSubmitting: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
}
