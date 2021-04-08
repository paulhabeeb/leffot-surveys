import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    PageHelmet,
    SurveyForm,
    SurveyNotAvailable,
    SurveyWrapper,
    ThemeContextProvider,
} from '@components/common'
import {
    ContactInfo,
    RankShoes,
    SelectShoes,
    SplashScreen,
} from '@components/survey-steps'

export default function TopFiveShoes({ data }) {
    const [selections, setSelections] = useState([])
    const { data: pageData, uid } = data.allPrismicTopFiveShoes.edges[0].node
    const theme = {
        splashScreen: pageData.splash_screen_background_color,
        sectionTitle: pageData.section_title_background_color,
    }

    if (pageData.status === 'Upcoming' || pageData.status === 'Complete') {
        return <SurveyNotAvailable status={pageData.status} uid={uid} />
    }

    return (
        <ThemeContextProvider theme={theme}>
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
                    <SelectShoes
                        buttonText={pageData.shoes_button_text}
                        description={pageData.shoes_section_description.raw}
                        linkDestination='section-two'
                        sectionName='section-one'
                        selectedShoes={selections}
                        setSelectedShoes={setSelections}
                        shoes={pageData.body}
                        title={pageData.shoe_section_title.raw}
                    />
                    <SurveyForm
                        errorTitle={pageData.top_section_title.raw}
                        errorMessage={pageData.not_enough_shoes.raw}
                        formName={uid}
                        maxSelections={pageData.maxselections}
                        minSelections={pageData.minselections}
                        shoes={selections}
                    >
                        <RankShoes
                            description={pageData.top_section_description.raw}
                            sectionName='section-two'
                            shoes={selections}
                            title={pageData.top_section_title.raw}
                        />
                        <ContactInfo />
                    </SurveyForm>
                </SurveyWrapper>
            </main>
        </ThemeContextProvider>
    )
}

TopFiveShoes.propTypes = {
    data: PropTypes.object,
}

export const query = graphql`
    query TopFiveShoesPageQuery($uid: String!) {
        allPrismicTopFiveShoes(filter: { uid: { eq: $uid } }) {
            edges {
                node {
                    uid
                    data {
                        body {
                            ... on PrismicTopFiveShoesBodyPollItem {
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
                        maxselections
                        minselections
                        not_enough_shoes {
                            raw
                        }
                        page_description
                        page_image {
                            url
                        }
                        page_title
                        poll_description {
                            raw
                        }
                        section_title_background_color
                        shoes_button_text
                        shoes_section_description {
                            raw
                        }
                        shoe_section_title {
                            raw
                        }
                        splash_screen_background_color
                        status
                        submit_button_text
                        title {
                            raw
                        }
                        top_section_description {
                            raw
                        }
                        top_section_title {
                            raw
                        }
                    }
                }
            }
        }
    }
`
