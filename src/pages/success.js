import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import * as styles from './Success.module.scss'
import { PageHeader, PageHelmet } from '@components/common'

export default function Success({ data }) {
    const pageData = data.prismicSuccessPage.data
    const uid = data.prismicSuccessPage.uid

    return (
        <main>
            <PageHelmet
                title={pageData.page_title}
                description={pageData.page_description}
                url={uid}
            />
            <div className={styles.container}>
                <PageHeader
                    description={pageData.caption.raw}
                    isH1={true}
                    title={pageData.title.raw}
                />
                <a href={pageData.link.url} className={styles.shop}>
                    {pageData.link_label}
                </a>
            </div>
        </main>
    )
}

Success.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query SuccessQuery {
        prismicSuccessPage {
            uid
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
            }
        }
    }
`
