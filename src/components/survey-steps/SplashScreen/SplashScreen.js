import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './SplashScreen.module.scss'
import { FullscreenLayout, PageHeader } from '@components/common'

export default function SplashScreen({ description, title }) {
    return (
        <FullscreenLayout id='splash-page'>
            <div className={styles.container}>
                <PageHeader
                    description={description}
                    isH1={true}
                    title={title}
                />
            </div>
        </FullscreenLayout>
    )
}

SplashScreen.propTypes = {
    description: PropTypes.array,
    title: PropTypes.array,
}
