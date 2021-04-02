import React from 'react'
import * as styles from './SectionTitle.module.scss'
import { PageHeader } from '@components/common'

export default function SectionTitle({ description, title }) {
    return <PageHeader
        description={description}
        title={title}
        wrapperStyles={styles.sectionTitle}
    />
}
