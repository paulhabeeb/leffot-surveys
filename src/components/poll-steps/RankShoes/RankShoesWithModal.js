import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Details } from '@components/modals'
import { RankShoes } from '@components/poll-steps'

export default function RankShoesWithModal({
    buttonText,
    description,
    errorMessage,
    formName,
    requireEnoughShoes,
    sectionName,
    shoes,
    title,
}) {
    const [modal, setModal] = useState({
        isOpen: false,
        shoe: {
            name: {
                raw: [],
            },
            description: {
                raw: [],
            },
            images: [],
        },
    })

    const modalIsSelected =
        shoes.filter(item => item.name === modal.shoe.name).length > 0

    return (
        <>
            <RankShoes
                actionComponentFunction={setModal}
                buttonText={buttonText}
                formName={formName}
                description={description}
                requireEnoughShoes={requireEnoughShoes}
                sectionName={sectionName}
                shoes={shoes}
                title={title}
            />
            <Details
                isOpen={modal.isOpen}
                isSelected={modalIsSelected}
                setModal={setModal}
                shoe={modal.shoe}
            />
        </>
    )
}

RankShoesWithModal.propTypes = {
    buttonText: PropTypes.string,
    description: PropTypes.array,
    errorMessage: PropTypes.array,
    requireEnoughShoes: PropTypes.bool,
    sectionName: PropTypes.string,
    shoes: PropTypes.array,
    title: PropTypes.array,
}
