import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './AddButton.module.scss'

export default function AddButton({
    handleClick,
    isAdding,
    isSelected,
    productName,
}) {
    const verb = isSelected ? 'Remove' : 'Add'
    const prep = isSelected ? 'from' : 'to'

    return (
        <button
            className={styles.addButton}
            onClick={handleClick}
            onKeyPress={handleClick}
        >
            {isAdding && isSelected ? (
                <span className={styles.checkmark}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
                        <path
                            className={styles.checkmarkCheck}
                            fill='none'
                            d='M14.1 27.2l7.1 7.2 16.7-16.8'
                        />
                    </svg>
                </span>
            ) : (
                <span>
                    {verb}{' '}
                    <span className='visuallyHidden'>
                        {productName} {prep} Top Five
                    </span>
                </span>
            )}
        </button>
    )
}

AddButton.propTypes = {
    handleClick: PropTypes.func,
    isAdding: PropTypes.bool,
    isSelected: PropTypes.bool,
    productName: PropTypes.string,
}
