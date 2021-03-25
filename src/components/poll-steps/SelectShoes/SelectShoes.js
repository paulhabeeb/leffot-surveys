import React, { useState } from 'react'
import { scroller } from 'react-scroll'

import { Layout, PageHeader, Button } from '@components/common'
import ShoeCard from './ShoeCard'
import DetailsModal from './DetailsModal'
import * as styles from './SelectShoes.module.scss'

export default function SelectShoes({
    buttonText,
    description,
    selectedShoes,
    setSelectedShoes,
    shoes,
    title,
}) {
    const [errorMessage, setErrorMessage] = useState(null)
    const [modal, setModal] = useState({
        isOpen: false,
        shoe: {
            name: {
                raw: null,
            },
            description: {
                raw: null,
            },
            images: [],
        },
    })

    const updateErrorMessage = (arrayLength, hasTriedSubmit = false) => {
        if (arrayLength === 5) {
            setErrorMessage(null)
        }

        if (arrayLength > 5) {
            setErrorMessage(`You may select no more than five shoes.`)
        }

        if (arrayLength < 5 && hasTriedSubmit) {
            setErrorMessage('Please select five shoes.')
        }
    }

    const updateSelectedShoes = shoe => {
        let filteredArray = [
            ...selectedShoes,
            shoe,
        ]

        if (selectedShoes.filter(item => item.name === shoe.name).length > 0) {
            filteredArray = selectedShoes.filter(item => item.name !== shoe.name)
        }

        if (filteredArray.length <= 5) {
            setSelectedShoes(filteredArray)
        }

        updateErrorMessage(filteredArray.length)
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (selectedShoes.length !== 5) {
            updateErrorMessage(selectedShoes.length, true)
        } else {
            const destination = 'rank-shoes'

            scroller.scrollTo(destination, {
                duration: 300,
                smooth: 'easeInOutQuint',
            })
        }
    }

    return (
        <Layout id='pick-five'>
            <div className={styles.container}>
                <PageHeader
                    alignCenter={true}
                    title={title}
                    description={description}
                />
                <ul className={styles.itemGrid}>
                    {shoes.map((shoe, index) => <ShoeCard
                        description={shoe.primary.item_description}
                        images={shoe.items}
                        isSelected={selectedShoes.filter(item => item.name === shoe.primary.item_name).length > 0}
                        name={shoe.primary.item_name}
                        onClick={updateSelectedShoes}
                        setModal={setModal}
                        key={index}
                    />)}
                </ul>
                <div className={styles.actions}>
                    <Button
                        label={buttonText}
                        kind='primary'
                        type='button'
                        onClick={handleSubmit}
                        error={errorMessage}
                    />
                </div>
            </div>
            <DetailsModal
                isOpen={modal.isOpen}
                isSelected={selectedShoes.filter(item => item.name === modal.shoe.name).length > 0}
                onClick={updateSelectedShoes}
                setModal={setModal}
                shoe={modal.shoe}
            />
        </Layout>
    )
}
