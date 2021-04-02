import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { PageHelmet, SurveyWrapper } from '@components/common'
import { RankShoes, SelectShoes, SplashPage } from '@components/poll-steps'

export default function Home({ data }) {
    const pollType = data.allPrismicTopFiveShoes.edges[0].node.type
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    const [selections, setSelections] = useState([])

    let requireEnoughShoes = false
    if (pollType !== 'rank_some_shoes')  {
        requireEnoughShoes = true
    }

    return (
        <main id='main'>
            <PageHelmet
                title={pageData.page_title}
                description={pageData.page_description}
                url={pageData.page_url}
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
                    requireEnoughShoes={requireEnoughShoes}
                    sectionName='section-two'
                    shoes={selections}
                    title={pageData.top_section_title.raw}
                />
            </SurveyWrapper>
        </main>
    )
}

export const query = graphql`
    query PickFiveQuery {
        allPrismicTopFiveShoes(filter: { uid: { eq: "top-five-march-2021" } }) {
            edges {
                node {
                    type
                    data {
                        page_title
                        page_description
                        page_url
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
