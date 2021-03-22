import React from 'react'
import { graphql } from 'gatsby'
import { container } from './index.module.scss'
import {
    Layout,
    PageHeader,
    ProgressButton,
} from '@components/common'

export default function Home({ data }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    
    return (
        <Layout>
            <div className={container}>
                <PageHeader
                    title={pageData.title.raw}
                    description={pageData.poll_description.raw}
                />
                <ProgressButton
                    isEnabled={true}
                    label={pageData.main_button_text}
                    url='/step-two'
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query HomepageQuery {
        allPrismicTopFiveShoes(filter: {uid: {eq: "top-five-march-2021"}}) {
            edges {
                node {
                    data {
                        title {
                            raw
                        }
                        poll_description {
                            raw
                        }
                        main_button_text
                    }
                }
            }
        }
    }
`
