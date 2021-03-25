import React from 'react'
import * as Yup from 'yup'
import { RichText } from 'prismic-reactjs'

import * as styles from './RankShoes.module.scss'
import { Layout, PageHeader } from '@components/common'
import RankForm from './RankForm'
import RankItem from './RankItem'

export default function RankShoes({
    buttonText,
    description,
    errorMessage,
    selections,
    title,
}) {
    let hasEnoughSelections = false
    if (selections.length === 5) {
        hasEnoughSelections = true
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
        email: Yup.string().when('joinEmailList', {
            is: true,
            then: Yup.string()
                .email('Please enter a valid email address')
                .required('You must enter a valid email address if you’d like to subscribe to our mailing list'),
            otherwise: Yup.string().email('Please enter a valid email address'),
        }),
        joinEmailList: Yup.boolean(),
        comments: Yup.string(),
    }
    let selectionsList = []

    if (selections) {
        selections.forEach(selection => {
            const name = RichText.asText(selection.name.raw)
            initialValues[name] = undefined
            validationSchema[name] = Yup.string().required('Please select a rank')
        })

        selectionsList = selections.map((item, index) => <RankItem
            name={RichText.asText(item.name.raw)}
            image={item.images[0].item_image}
            key={index}
        />)
    }

    return (
        <Layout id='rank-shoes'>
            <div className={styles.container}>
                <PageHeader
                    alignCenter={true}
                    title={title}
                    description={hasEnoughSelections ? description : errorMessage}
                />
                {hasEnoughSelections && <RankForm
                    buttonText={buttonText}
                    initialValues={initialValues}
                    selectionsList={selectionsList}
                    validationSchema={validationSchema}
                />}
            </div>
        </Layout>
    )
}
