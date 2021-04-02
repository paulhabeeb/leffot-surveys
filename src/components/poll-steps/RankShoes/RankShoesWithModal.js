import React, { useState } from 'react'
import { DetailsModal } from '@components/common'
import { RankShoes } from '@components/poll-steps'

export default function RankShoesWithModal({
    buttonText,
    description,
    errorMessage,
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

    return (
        <>
            <RankShoes
                actionComponentFunction={setModal}
                buttonText={buttonText}
                description={description}
                requireEnoughShoes={requireEnoughShoes}
                sectionName={sectionName}
                shoes={shoes}
                title={title}
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
