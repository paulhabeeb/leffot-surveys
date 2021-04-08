import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './SectionTitle.module.scss'
import { PageHeader, useThemeContext } from '@components/common'

export default function SectionTitle({ description, title }) {
    const { sectionTitle } = useThemeContext()

    return (
        <PageHeader
            backgroundColor={sectionTitle}
            description={description}
            title={title}
            wrapperClassName={styles.sectionTitle}
        />
    )
}

SectionTitle.propTypes = {
    description: PropTypes.array,
    title: PropTypes.array,
}
