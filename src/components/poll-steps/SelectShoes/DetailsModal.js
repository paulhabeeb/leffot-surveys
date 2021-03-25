import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { RichText } from 'prismic-reactjs'
import * as styles from './DetailsModal.module.scss'
import AddButton from './AddButton'

function DetailImage({ alt, url }) {
    return (
        <figure
            className={styles.imageWrapper}
            style={{ backgroundImage: `url(${url}` }}
        >
            <img src={url} alt={alt} className={styles.image} />
        </figure>
    )
}

export default function DetailsModal({ isOpen, isSelected, onClick, setModal, shoe }) {
    const {
        name,
        description,
        images,
    } = shoe

    const [isAdding, setIsAdding] = useState(false)
    const handleClick = event => {
        event.preventDefault()
        onClick({
            name,
            images,
        })
        setIsAdding(true)
        setTimeout(setIsAdding, 2500, false)
    }

    const toggleModal = () => {
        setModal({
            isOpen: false,
            shoe: { ...shoe },
        })
    }

    return (
        <ReactModal
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
                        <AddButton
                            handleClick={handleClick}
                            isAdding={isAdding}
                            isSelected={isSelected}
                            productName={RichText.asText(name.raw)}
                        />
                    </div>
                </div>
                <div className={styles.imageGrid}>
                    {images.map((image, index) => <DetailImage
                        url={image.item_image.url}
                        alt={image.item_image.alt}
                    />)}
                </div>
            </div>
        </ReactModal>
    )
}
