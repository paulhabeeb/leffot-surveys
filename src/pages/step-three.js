import React from 'react'
import { graphql } from 'gatsby'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import qs from 'qs'

import { RichText } from 'prismic-reactjs'
import {
    Layout,
    PageHeader,
} from '@components/common'
import { RankItem } from '@components/shoe'

export default function StepThreeQuery({ data, location }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    const { state = {} } = location
    const { selectedShoes: selections } = state
    const formName = 'alden-poll-march-2021'
    
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
        <Layout>
            <PageHeader
                title={pageData.top_section_title.raw}
                description={pageData.top_section_description.raw}
            />
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(validationSchema)}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    // add form name to data we submit to netlify
                    // <input type="hidden" name="form-name" value="name_of_my_form" />
                    console.log(values)
                    axios({
                        method: 'post',
                        url: '/',
                        data: qs.parse({
                            'form-name': formName,
                            ...values,
                        }),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    })
                        .then(() => {
                            console.log('succes!')
                            resetForm()
                        })
                        .catch(error => console.log(error))
                }}
            >
                {({ resetForm }) => (
                    <Form name={formName} data-netlify="true">
                        <ul>{selectionsList}</ul>
                        <button type='submit'>{pageData.submit_button_text}</button>
                        <button type='button' onClick={resetForm}>Reset form</button>
                    </Form>
                )}
            </Formik>
        </Layout>
    )
}

export const query = graphql`
    query StepThreeQuery {
        allPrismicTopFiveShoes(filter: {uid: {eq: "top-five-march-2021"}}) {
            edges {
                node {
                    data {
                        top_section_description {
                            raw
                        }
                        top_section_title {
                            raw
                        }
                        submit_button_text
                    }
                }
            }
        }
    }
`
