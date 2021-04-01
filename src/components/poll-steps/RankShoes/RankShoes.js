import React from 'react'
import * as Yup from 'yup'
import { RichText } from 'prismic-reactjs'

import * as styles from './RankShoes.module.scss'
import { Layout, PageHeader, ShowDetailsButton } from '@components/common'
import RankForm from './RankForm'
import RankItem from './RankItem'

export default function RankShoes({
    actionComponentFunction,
    buttonText,
    description,
    errorMessage,
    requireEnoughShoes,
    shoes,
    title,
}) {
    let hasEnoughShoes = false
    if (
        (shoes.length === 5 && requireEnoughShoes)
        || !requireEnoughShoes
    ) {
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
        email: Yup.string().email('Please enter a valid email address').required('Please enter a valid email address'),
        joinEmailList: Yup.boolean(),
        comments: Yup.string(),
    }
    const initialShoes = {}
    let shoesList = []

    if (shoes) {
        shoes.forEach(shoe => {
            const name = RichText.asText(shoe.primary.item_name.raw)
            initialShoes[name] = undefined
            validationSchema[name] = Yup.string().required('Please select a rank')
        })

        shoesList = shoes.map((shoe, index) => {
            const actionComponent = <ShowDetailsButton
                caption='Show details'
                setModal={actionComponentFunction}
                shoe={shoe}
                styles={styles.detailsButton}
            />

            return (
                <RankItem
                    actionComponent={actionComponent}
                    description={shoe.primary.item_description}
                    name={RichText.asText(shoe.primary.item_name.raw)}
                    images={shoe.items}
                    key={index}
                />
            )
        })
    }

    return (
        <Layout id='rank-shoes'>
            <div className={styles.container}>
                <PageHeader
                    alignCenter={true}
                    title={title}
                    description={hasEnoughShoes ? description : errorMessage}
                />
                {hasEnoughShoes && <RankForm
                    buttonText={buttonText}
                    initialShoes={initialShoes}
                    initialValues={initialValues}
                    shoesList={shoesList}
                    validationSchema={validationSchema}
                />}
            </div>
        </Layout>
    )
}
