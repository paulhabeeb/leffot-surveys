import React from 'react'
import * as Yup from 'yup'
import { RichText } from 'prismic-reactjs'

import * as styles from './RankShoes.module.scss'
import { Layout, PageHeader } from '@components/common'
import RankForm from './RankForm'
import RankItem from './RankItem'

export default function StepThreeQuery({ buttonText, description, selections, title }) {
    const initialValues = {}
    const validationSchema = {}
    let selectionsList = []
    
    if (selections) {
        selections.forEach(selection => {
            const name = RichText.asText(selection.name.raw)
            initialValues[name] = undefined
            validationSchema[name] = Yup.string().required('Required')
        })
        
        selectionsList = selections.map((item, index) => <RankItem
            name={RichText.asText(item.name.raw)}
            image={item.images[0].item_image}
        />)
    }
    
    return (
        <Layout id='rank-shoes'>
            <div className={styles.container}>
                <PageHeader
                    alignCenter={true}
                    title={title}
                    description={description}
                />
                {selections.length === 5 ? (
                    <RankForm
                        buttonText={buttonText}
                        initialValues={initialValues}
                        selectionsList={selectionsList}
                        validationSchema={validationSchema}
                    />
                ) : (
                    <div>Please select five shoes.</div>
                )}
            </div>
        </Layout>
    )
}
