import React from 'react'
import { graphql } from 'gatsby'

import { Layout, PageHeader, SEO } from '@components/common'
import * as styles from './Success.module.scss'

export default function Success({ data }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data

    return (
        <main>
            <SEO title='Success! Thank you for voting.' />
            <Layout>
                <PageHeader
                    title={pageData.success_title.raw}
                    description={pageData.success_description.raw}
                    alignCenter={true}
                />
                <a href={pageData.success_link.url} className={styles.shop}>{pageData.success_link_text}</a>
            </Layout>
        </main>
    )
}

export const query = graphql`
    query SuccessQuery {
        allPrismicTopFiveShoes(filter: {uid: {eq: "top-five-march-2021"}}) {
            edges {
                node {
                    data {
                        success_title {
                            raw
                        }
                        success_description {
                            raw
                        }
                        success_link_text
                        success_link {
                            url
                        }
                    }
                }
            }
        }
    }
`
