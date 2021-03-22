import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {
    Layout,
    PageHeader,
    ProgressButton,
} from '@components/common'
import { ShoeCard } from '@components/shoe'
import { itemGrid } from './step-two.module.scss'

export default function StepTwoPage({ data }) {
    const pageData = data.allPrismicTopFiveShoes.edges[0].node.data
    const [selectedShoes, setSelectedShoes] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    
    const updateErrorMessage = arrayLength => {
        if (arrayLength === 5) {
            setErrorMessage(null)
        }
        
        if (arrayLength < 5) {
            setErrorMessage('Please select five shoes.')
        }
        
        if (arrayLength > 5) {
            setErrorMessage(`You have selected ${arrayLength} shoes. Please select no more than 5.`)
        }
    }
    
    const updateSelectedShoes = shoe => {
        let filteredArray = [
            ...selectedShoes,
            shoe,
        ]
        
        if (selectedShoes.filter(item => item.name === shoe.name).length > 0) {
            filteredArray = selectedShoes.filter(item => item.name !== shoe.name)
        }
        
        setSelectedShoes(filteredArray)
        updateErrorMessage(filteredArray.length)
    }
    
    return (
        <Layout>
            <PageHeader
                title={pageData.shoe_section_title.raw}
                description={pageData.shoes_section_description.raw}
            />
            <ul className={itemGrid}>
                {pageData.body.map((shoe, index) => <ShoeCard
                    name={shoe.primary.item_name}
                    description={shoe.primary.item_description}
                    images={shoe.items}
                    isSelected={selectedShoes.filter(item => item.name === shoe.primary.item_name).length > 0}
                    onClick={updateSelectedShoes}
                    key={index}
                />)}
            </ul>
            <ProgressButton
                label={pageData.shoes_button_text}
                url='/step-three'
                isEnabled={selectedShoes.length === 5}
                error={errorMessage}
                stateToPass={{'selectedShoes': selectedShoes}}
            />
        </Layout>
    )
}

export const query = graphql`
    query StepTwoQuery {
        allPrismicTopFiveShoes(filter: {uid: {eq: "top-five-march-2021"}}) {
            edges {
                node {
                    data {
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
                    }
                }
            }
        }
    }
`
