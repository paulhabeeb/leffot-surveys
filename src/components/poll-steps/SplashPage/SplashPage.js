import React from 'react'
import { Link } from 'react-scroll'
import * as styles from './SplashPage.module.scss'
import { Layout, PageHeader } from '@components/common'

export default function SplashPage({ buttonText, description, title }) {
    const destination = 'pick-five'
    const destinationUrl = `/#${destination}`

    return (
        <Layout id='splash-page'>
            <div className={styles.container}>
                <PageHeader
                    title={title}
                    description={description}
                />
                <Link
                    to={destination}
                    smooth='easeInOutQuint'
                    duration={500}
                    href={destinationUrl}
                    className={styles.button}
                >
                    {buttonText}
                </Link>
            </div>
        </Layout>
    )
}
