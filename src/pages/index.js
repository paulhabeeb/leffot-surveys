import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import { getCookieValue } from '@lib/cookies'

import { CookieBanner, SEO } from '@components/common'
import { RankShoes, SelectShoes, SplashPage } from '@components/poll-steps'

export default function Home({ data }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    const [selections, setSelections] = useState([])

    if (getCookieValue('hasVoted')) {
        navigate('/success')
        return null
    }

    return (
        <main>
            <SEO
                title={pageData.page_title}
                description={pageData.page_description}
                url={pageData.page_url}
                image={pageData.page_image.url}
            />
            <SplashPage
                buttonText={pageData.main_button_text}
                description={pageData.poll_description.raw}
                title={pageData.title.raw}
            />
            <SelectShoes
                buttonText={pageData.shoes_button_text}
                description={pageData.shoes_section_description.raw}
                selectedShoes={selections}
                setSelectedShoes={setSelections}
                shoes={pageData.body}
                title={pageData.shoe_section_title.raw}
            />
            <RankShoes
                buttonText={pageData.submit_button_text}
                description={pageData.top_section_description.raw}
                errorMessage={pageData.not_enough_shoes.raw}
                selections={selections}
                title={pageData.top_section_title.raw}
            />
            <CookieBanner />
        </main>
    )
}

export const query = graphql`
    query HomepageQuery {
        allPrismicTopFiveShoes(filter: {uid: {eq: "top-five-march-2021"}}) {
            edges {
                node {
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
                        main_button_text
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
