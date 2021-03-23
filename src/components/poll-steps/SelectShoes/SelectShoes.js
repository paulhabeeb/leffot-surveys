import React, { useState } from 'react'
import { scroller } from 'react-scroll'

import { Layout, PageHeader, Button } from '@components/common'
import ShoeCard from './ShoeCard'
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
                        name={shoe.primary.item_name}
                        description={shoe.primary.item_description}
                        images={shoe.items}
                        isSelected={selectedShoes.filter(item => item.name === shoe.primary.item_name).length > 0}
                        onClick={updateSelectedShoes}
                        shouldDisabled={selectedShoes.length > 5}
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
        </Layout>
    )
}
