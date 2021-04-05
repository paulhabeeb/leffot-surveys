import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { PageHelmet, SurveyWrapper } from '@components/common'
import { RankShoesWithModal, SplashPage } from '@components/poll-steps'

export default function RankSomeShoes({ data }) {
    const pageData = data.allPrismicRankSomeShoes.edges[0].node.data
    const uid = data.allPrismicRankSomeShoes.edges[0].node.uid

    return (
        <main id='main'>
            <PageHelmet
                title={pageData.page_title}
                description={pageData.page_description}
                url={uid}
                image={pageData.page_image.url}
            />
            <SplashPage
                description={pageData.poll_description.raw}
                title={pageData.title.raw}
            />
            <SurveyWrapper>
                <RankShoesWithModal
                    buttonText={pageData.shoes_button_text}
                    description={pageData.shoes_section_description.raw}
                    formName={uid}
                    requireEnoughShoes={false}
                    sectionName='section-one'
                    shoes={pageData.body}
                    title={pageData.shoe_section_title.raw}
                />
            </SurveyWrapper>
        </main>
    )
}

RankSomeShoes.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query RankSomeShoesPageQuery($uid: String!) {
        allPrismicRankSomeShoes(filter: { uid: { eq: $uid } }) {
            edges {
                node {
                    uid
                    data {
                        page_description
                        title {
                            raw
                        }
                        shoes_section_description {
                            raw
                        }
                        shoes_button_text
                        shoe_section_title {
                            raw
                        }
                        poll_description {
                            raw
                        }
                        page_title
                        page_image {
                            url
                            alt
                        }
                        body {
                            ... on PrismicRankSomeShoesBodyPollItem {
                                items {
                                    item_image {
                                        url
                                        alt
                                    }
                                }
                                primary {
                                    item_name {
                                        raw
                                    }
                                    item_description {
                                        raw
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
