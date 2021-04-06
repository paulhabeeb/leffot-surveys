import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    PageHelmet,
    PollNotAvailable,
    SurveyForm,
    SurveyWrapper,
} from '@components/common'
import {
    ContactInfo,
    RankShoesWithModal,
    SplashScreen,
} from '@components/poll-steps'

export default function RankSomeShoes({ data }) {
    const { data: pageData, uid } = data.allPrismicRankSomeShoes.edges[0].node

    if (pageData.status === 'Upcoming' || pageData.status === 'Complete') {
        return <PollNotAvailable status={pageData.status} uid={uid} />
    }

    return (
        <main id='main'>
            <PageHelmet
                title={pageData.page_title}
                description={pageData.page_description}
                url={uid}
                image={pageData.page_image.url}
            />
            <SplashScreen
                description={pageData.poll_description.raw}
                title={pageData.title.raw}
            />
            <SurveyWrapper>
                <SurveyForm
                    formName={uid}
                    maxSelections={pageData.body.length}
                    minSelections={pageData.body.length}
                    shoes={pageData.body}
                >
                    <RankShoesWithModal
                        description={pageData.shoes_section_description.raw}
                        shoes={pageData.body}
                        title={pageData.shoe_section_title.raw}
                    />
                    <ContactInfo />
                </SurveyForm>
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
                        body {
                            ... on PrismicRankSomeShoesBodyPollItem {
                                items {
                                    item_image {
                                        thumbnails {
                                            medium {
                                                alt
                                                dimensions {
                                                    height
                                                    width
                                                }
                                                url
                                            }
                                            small {
                                                alt
                                                dimensions {
                                                    height
                                                    width
                                                }
                                                url
                                            }
                                        }
                                    }
                                }
                                primary {
                                    item_description {
                                        raw
                                    }
                                    item_name {
                                        raw
                                    }
                                }
                            }
                        }
                        page_description
                        page_image {
                            url
                            alt
                        }
                        page_title
                        poll_description {
                            raw
                        }
                        shoes_button_text
                        shoes_section_description {
                            raw
                        }
                        shoe_section_title {
                            raw
                        }
                        status
                        title {
                            raw
                        }
                    }
                }
            }
        }
    }
`
