import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Details } from '@components/modals'
import { RankShoes } from '@components/survey-steps'

export default function RankShoesWithModal({ description, shoes, title }) {
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
                description={description}
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
    description: PropTypes.array,
    shoes: PropTypes.array,
    title: PropTypes.array,
}
