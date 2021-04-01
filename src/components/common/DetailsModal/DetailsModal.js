import React from 'react'
import ReactModal from 'react-modal'
import { RichText } from 'prismic-reactjs'

import * as styles from './DetailsModal.module.scss'
import ImageGrid from './ImageGrid'

export default function DetailsModal({ isOpen, isSelected, setModal, shoe }) {
    const {
        actionComponent,
        name,
        description,
        images,
    } = shoe

    const toggleModal = () => {
        setModal({
            isOpen: false,
            shoe: { ...shoe },
        })
    }

    return (
        <ReactModal
            appElement={document.getElementById('main')}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={{
                content: {
                    border: '1px solid var(--color-light-grey)',
                    borderRadius: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                }
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
                    <h2 className={styles.title}>{RichText.asText(name.raw)}</h2>
                    <RichText render={description.raw} />
                    <div className={styles.actions}>
                        {actionComponent}
                    </div>
                </div>
                <div className={styles.imageGrid}>
                    <ImageGrid images={images} />
                </div>
            </div>
        </ReactModal>
    )
}
