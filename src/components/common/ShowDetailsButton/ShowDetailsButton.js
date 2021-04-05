import React from 'react'
import PropTypes from 'prop-types'

export default function ShowDetailsButton({ caption, setModal, shoe, styles }) {
    if (setModal) {
        const handleDetailsClick = event => {
            event.preventDefault()

            setModal({
                isOpen: true,
                shoe: {
                    // actionComponent: addButton,
                    name: shoe.primary.item_name,
                    description: shoe.primary.item_description,
                    images: shoe.items,
                },
            })
        }

        return (
            <button
                type='button'
                className={styles}
                onClick={handleDetailsClick}
                onKeyPress={handleDetailsClick}
            >
                {caption}
            </button>
        )
    }

    return null
}

ShowDetailsButton.propTypes = {
    caption: PropTypes.string,
    setModal: PropTypes.func,
    shoe: PropTypes.object,
    styles: PropTypes.string,
}
