import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './SectionTitle.module.scss'
import { PageHeader } from '@components/common'

export default function SectionTitle({ description, title }) {
    return (
        <PageHeader
            description={description}
            title={title}
            wrapperStyles={styles.sectionTitle}
        />
    )
}

SectionTitle.propTypes = {
    description: PropTypes.array,
    title: PropTypes.array,
}
