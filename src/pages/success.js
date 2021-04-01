import React from 'react'
import { graphql } from 'gatsby'

import * as styles from './Success.module.scss'
import { Layout, PageHeader, Seo } from '@components/common'

export default function Success({ data }) {
    const pageData = data.prismicSuccessPage.data

    return (
        <main>
            <Seo
                title={pageData.page_title}
                description={pageData.page_description}
                url={pageData.page_url}
            />
            <Layout>
                <PageHeader
                    title={pageData.title.raw}
                    description={pageData.caption.raw}
                    alignCenter={true}
                />
                <a href={pageData.link.url} className={styles.shop}>
                    {pageData.link_label}
                </a>
            </Layout>
        </main>
    )
}

export const query = graphql`
    query SuccessQuery {
        prismicSuccessPage {
            data {
                link_label
                caption {
                    raw
                }
                link {
                    url
                }
                title {
                    raw
                }
                page_title
                page_description
                page_url
            }
        }
    }
`
