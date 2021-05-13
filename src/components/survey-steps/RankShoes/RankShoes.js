import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'

import * as styles from './RankShoes.module.scss'
import { SectionTitle, ShowDetailsButton } from '@components/common'
import RankItem from './RankItem'

export default function RankShoes({
    actionComponentFunction,
    description,
    sectionName,
    shoes,
    title,
}) {
    const rankOptions = []
    const hiddenInputs = []
    const numberOfHiddenInputs = Object.keys(shoes).length
    for (let i = 1; i <= numberOfHiddenInputs; i++) {
        rankOptions.push(i)
        hiddenInputs.push(
            <input type='hidden' name={`rank-${i}`} value='' key={i} />
        )
    }

    const shoesList = shoes.map((shoe, index) => {
        const actionComponent = (
            <ShowDetailsButton
                caption='Show details'
                setModal={actionComponentFunction}
                shoe={shoe}
                styles={styles.detailsButton}
            />
        )

        return (
            <RankItem
                actionComponent={actionComponent}
                description={shoe.primary.item_description}
                images={shoe.items}
                name={RichText.asText(shoe.primary.item_name.raw)}
                options={rankOptions}
                placeholder='Select a rank'
                key={index}
            />
        )
    })

    return (
        <div className={styles.container} id={sectionName}>
            <SectionTitle description={description} title={title} />
            {hiddenInputs}
            <ul className={styles.listContainer}>{shoesList}</ul>
        </div>
    )
}

RankShoes.propTypes = {
    actionComponentFunction: PropTypes.func,
    description: PropTypes.array,
    sectionName: PropTypes.string,
    shoes: PropTypes.array,
    title: PropTypes.array,
}
