import React from 'react'
import { graphql } from 'gatsby'

import * as styles from './Success.module.scss'
import { Layout, PageHeader, PageHelmet } from '@components/common'

export default function Success({ data }) {
    const pageData = data.prismicSuccessPage.data

    return (
        <main>
            <PageHelmet
                title={pageData.page_title}
                description={pageData.page_description}
                url={pageData.page_url}
            />
            <Layout>
                <PageHeader
                    description={pageData.caption.raw}
                    isH1={true}
                    title={pageData.title.raw}
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
