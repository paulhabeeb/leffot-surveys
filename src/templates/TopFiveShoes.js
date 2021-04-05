import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { PageHelmet, SurveyWrapper } from '@components/common'
import { RankShoes, SelectShoes, SplashPage } from '@components/poll-steps'

export default function TopFiveShoes({ data }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    const uid = data.allPrismicTopFiveShoes.edges[0].node.uid
    const [selections, setSelections] = useState([])

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
                <RankShoes
                    buttonText={pageData.submit_button_text}
                    description={pageData.top_section_description.raw}
                    errorMessage={pageData.not_enough_shoes.raw}
                    requireEnoughShoes={true}
                    sectionName='section-two'
                    shoes={selections}
                    title={pageData.top_section_title.raw}
                />
            </SurveyWrapper>
        </main>
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
                        page_title
                        page_description
                        page_image {
                            url
                        }
                        title {
                            raw
                        }
                        poll_description {
                            raw
                        }
                        shoe_section_title {
                            raw
                        }
                        shoes_section_description {
                            raw
                        }
                        shoes_button_text
                        body {
                            ... on PrismicTopFiveShoesBodyPollItem {
                                items {
                                    item_image {
                                        alt
                                        url
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
                        top_section_description {
                            raw
                        }
                        top_section_title {
                            raw
                        }
                        not_enough_shoes {
                            raw
                        }
                        submit_button_text
                    }
                }
            }
        }
    }
`
