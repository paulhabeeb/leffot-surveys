import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { Layout, PageHeader, PageHelmet } from '@components/common'

export default function SurveyNotAvailable({ status, uid }) {
    const {
        prismicSurveyNotAvailable: { data },
    } = useStaticQuery(graphql`
        query SurveyNotAvailable {
            prismicSurveyNotAvailable {
                data {
                    coming_soon_title {
                        raw
                    }
                    completed_description {
                        raw
                    }
                    completed_title {
                        raw
                    }
                    coming_soon_description {
                        raw
                    }
                }
            }
        }
    `)

    const title =
        status === 'Upcoming'
            ? data.coming_soon_title.raw
            : data.completed_title.raw
    const description =
        status === 'Upcoming'
            ? data.coming_soon_description.raw
            : data.completed_description.raw

    return (
        <main id='main'>
            <PageHelmet title={RichText.asText(title)} url={uid} />
            <Layout id='survey-not-available'>
                <PageHeader
                    description={description}
                    isH1={true}
                    title={title}
                />
            </Layout>
        </main>
    )
}

SurveyNotAvailable.propTypes = {
    status: PropTypes.string,
    uid: PropTypes.string,
}
