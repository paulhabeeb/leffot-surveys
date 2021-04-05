import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './SplashPage.module.scss'
import { Layout, PageHeader } from '@components/common'

export default function SplashPage({ description, title }) {
    return (
        <Layout id='splash-page'>
            <div className={styles.container}>
                <PageHeader
                    description={description}
                    isH1={true}
                    title={title}
                />
            </div>
        </Layout>
    )
}

SplashPage.propTypes = {
    description: PropTypes.array,
    title: PropTypes.array,
}
