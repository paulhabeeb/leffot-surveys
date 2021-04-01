import React from 'react'
import { graphql } from 'gatsby'
import { Seo } from '@components/common'
import { RankShoesWithModal, SplashPage } from '@components/poll-steps'

export default function Home({ data }) {
    const pollType = data.allPrismicRankSomeShoes.edges[0].node.type
    const pageData = data.allPrismicRankSomeShoes.edges[0].node.data

    let requireEnoughShoes = false
    if (pollType !== 'rank_some_shoes')  {
        requireEnoughShoes = true
    }

    return (
        <main id='main'>
            <Seo
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
            <RankShoesWithModal
                buttonText={pageData.shoes_button_text}
                description={pageData.shoes_section_description.raw}
                requireEnoughShoes={requireEnoughShoes}
                title={pageData.shoe_section_title.raw}
                shoes={pageData.body}
            />
        </main>
    )
}

export const query = graphql`
    query TobaccoChamoisQuery {
        allPrismicRankSomeShoes(
            filter: { uid: { eq: "tobacco-chamois-apr-21" } }
        ) {
            edges {
                node {
                    type
                    data {
                        main_button_text
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
                        page_url
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
