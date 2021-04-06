import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { RichText } from 'prismic-reactjs'

import * as styles from './RankShoes.module.scss'
import { SectionTitle, ShowDetailsButton } from '@components/common'
import RankForm from './RankForm'
import RankItem from './RankItem'

export default function RankShoes({
    actionComponentFunction,
    buttonText,
    description,
    errorMessage,
    formName,
    requireEnoughShoes,
    sectionName,
    shoes,
    title,
}) {
    let hasEnoughShoes = false
    if ((shoes.length === 5 && requireEnoughShoes) || !requireEnoughShoes) {
        hasEnoughShoes = true
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        joinEmailList: false,
        comments: '',
    }
    const validationSchema = {
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Please enter a valid email address'),
        joinEmailList: Yup.boolean(),
        comments: Yup.string(),
    }
    const initialShoes = {}
    let shoesList = []

    if (shoes) {
        const initValue = 'Select a rank'

        shoes.forEach(shoe => {
            const name = RichText.asText(shoe.primary.item_name.raw)
            initialShoes[name] = initValue
            validationSchema[name] = Yup.string()
                .notOneOf([initValue], 'Please select a rank')
                .required('Please select a rank')
        })

        shoesList = shoes.map((shoe, index) => {
            const actionComponent = (
                <ShowDetailsButton
                    caption='Show details'
                    setModal={actionComponentFunction}
                    shoe={shoe}
                    styles={styles.detailsButton}
                />
            )

            return (
                <RankItem
                    actionComponent={actionComponent}
                    description={shoe.primary.item_description}
                    images={shoe.items}
                    name={RichText.asText(shoe.primary.item_name.raw)}
                    placeholder={initValue}
                    key={index}
                />
            )
        })
    }

    return (
        <>
            <div className={styles.container}>
                <SectionTitle
                    description={hasEnoughShoes ? description : errorMessage}
                    title={title}
                />
                {hasEnoughShoes && (
                    <RankForm
                        buttonText={buttonText}
                        formName={formName}
                        initialShoes={initialShoes}
                        initialValues={initialValues}
                        shoesList={shoesList}
                        validationSchema={validationSchema}
                    />
                )}
            </div>
        </>
    )
}

RankShoes.propTypes = {
    actionComponentFunction: PropTypes.func,
    buttonText: PropTypes.string,
    description: PropTypes.array,
    errorMessage: PropTypes.array,
    requireEnoughShoes: PropTypes.bool,
    sectionName: PropTypes.string,
    shoes: PropTypes.array,
    title: PropTypes.array,
}
