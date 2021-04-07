import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { setThemeColors } from '@lib/setThemeColors'

import {
    PageHelmet,
    SurveyForm,
    SurveyNotAvailable,
    SurveyWrapper,
} from '@components/common'
import {
    ContactInfo,
    RankShoesWithModal,
    SplashScreen,
} from '@components/survey-steps'

export default function RankSomeShoes({ data }) {
    const [isReady, setIsReady] = useState(false)
    const { data: pageData, uid } = data.allPrismicRankSomeShoes.edges[0].node

    useEffect(() => {
        setThemeColors(
            {
                background: pageData.splash_screen_background_color,
                text: pageData.splash_screen_text_color,
            },
            {
                background: pageData.section_title_background_color,
                text: pageData.section_title_text_color,
            }
        )
        setIsReady(true)
    }, [pageData])

    if (!isReady) {
        return null
    }

    if (pageData.status === 'Upcoming' || pageData.status === 'Complete') {
        return <SurveyNotAvailable status={pageData.status} uid={uid} />
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
                        section_title_background_color
                        section_title_text_color
                        shoes_button_text
                        shoes_section_description {
                            raw
                        }
                        shoe_section_title {
                            raw
                        }
                        splash_screen_background_color
                        splash_screen_text_color
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
