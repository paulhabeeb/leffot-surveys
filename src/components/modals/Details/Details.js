import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { RichText } from 'prismic-reactjs'

import * as styles from './Details.module.scss'
import ImageGrid from './ImageGrid'

ReactModal.setAppElement('#___gatsby')

export default function Details({ isOpen, isSelected, setModal, shoe }) {
    const { actionComponent, name, description, images } = shoe

    const toggleModal = () => {
        setModal({
            isOpen: false,
            shoe: { ...shoe },
        })
    }

    return (
        <ReactModal
            closeTimeoutMS={100}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={{
                content: {
                    border: 0,
                    borderRadius: 0,
                    bottom: 20,
                    boxShadow: '0 0 10px 2px rgba(30, 30, 30, .15)',
                    left: 20,
                    right: 20,
                    top: 20,
                },
                overlay: {
                    backgroundColor: 'rgba(31, 31, 31, 0.35)',
                },
            }}
        >
            <div className={styles.close}>
                <button
                    onClick={toggleModal}
                    onKeyPress={toggleModal}
                    className={styles.closeButton}
                >
                    &times;
                </button>
            </div>
            <div className={styles.container}>
                <div className={styles.details}>
                    <h2 className={styles.title}>
                        {RichText.asText(name.raw)}
                    </h2>
                    <RichText render={description.raw} />
                    <div className={styles.actions}>{actionComponent}</div>
                </div>
                <ImageGrid images={images} />
            </div>
        </ReactModal>
    )
}

Details.propTypes = {
    isOpen: PropTypes.bool,
    isSelected: PropTypes.bool,
    setModal: PropTypes.func,
    shoe: PropTypes.object,
}
