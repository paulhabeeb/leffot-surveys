import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './SplashScreen.module.scss'
import {
    FullscreenLayout,
    PageHeader,
    useThemeContext,
} from '@components/common'

export default function SplashScreen({ description, title }) {
    const { splashScreen } = useThemeContext()

    return (
        <FullscreenLayout id='splash-page' backgroundColor={splashScreen}>
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
