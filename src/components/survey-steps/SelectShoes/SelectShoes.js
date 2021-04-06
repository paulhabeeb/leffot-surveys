import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { scroller } from 'react-scroll'

import * as styles from './SelectShoes.module.scss'
import { SectionTitle, Button } from '@components/common'
import { Details } from '@components/modals'
import ShoeCard from './ShoeCard'

export default function SelectShoes({
    buttonText,
    description,
    linkDestination,
    sectionName,
    selectedShoes,
    setSelectedShoes,
    shoes,
    title,
}) {
    const [errorMessage, setErrorMessage] = useState(null)
    const [modal, setModal] = useState({
        isOpen: false,
        shoe: {
            actionComponent: null,
            name: {
                raw: [],
            },
            description: {
                raw: [],
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
        let filteredArray = [...selectedShoes, shoe]

        if (
            selectedShoes.filter(
                item => item.primary.item_name === shoe.primary.item_name
            ).length > 0
        ) {
            filteredArray = selectedShoes.filter(
                item => item.primary.item_name !== shoe.primary.item_name
            )
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
            scroller.scrollTo(linkDestination, {
                duration: 300,
                smooth: 'easeInOutQuint',
            })
        }
    }

    return (
        <>
            <div className={styles.container}>
                <SectionTitle description={description} title={title} />
                <ul className={styles.itemGrid}>
                    {shoes.map((shoe, index) => (
                        <ShoeCard
                            isSelected={
                                selectedShoes.filter(
                                    item =>
                                        item.primary.item_name ===
                                        shoe.primary.item_name
                                ).length > 0
                            }
                            onClick={updateSelectedShoes}
                            shoe={shoe}
                            setModal={setModal}
                            key={index}
                        />
                    ))}
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
            <Details
                isOpen={modal.isOpen}
                isSelected={
                    selectedShoes.filter(item => item.name === modal.shoe.name)
                        .length > 0
                }
                onClick={updateSelectedShoes}
                setModal={setModal}
                shoe={modal.shoe}
            />
        </>
    )
}

SelectShoes.propTypes = {
    buttonText: PropTypes.string,
    description: PropTypes.array,
    linkDestination: PropTypes.string,
    sectionName: PropTypes.string,
    selectedShoes: PropTypes.array,
    setSelectedShoes: PropTypes.func,
    shoes: PropTypes.array,
    title: PropTypes.array,
}
