import React, { useState } from 'react'
import { DetailsModal } from '@components/common'
import { RankShoes } from '@components/poll-steps'

export default function RankShoesWithModal({
    buttonText,
    description,
    errorMessage,
    requireEnoughShoes,
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

    return (
        <>
            <RankShoes
                actionComponentFunction={setModal}
                buttonText={buttonText}
                description={description}
                requireEnoughShoes={requireEnoughShoes}
                title={title}
                shoes={shoes}
            />
            <DetailsModal
                isOpen={modal.isOpen}
                isSelected={shoes.filter(item => item.name === modal.shoe.name).length > 0}
                setModal={setModal}
                shoe={modal.shoe}
            />
        </>
    )
}
