import React from 'react'
import * as styles from './index.module.scss'
import { ArrowLink, PageHelmet } from '@components/common'

export default function FourOhFour() {
    return (
        <main className={styles.container}>
            <PageHelmet title='404 Error - Page Not Found' url='/404' />
            <h1 className={styles.title}>Page Not Found</h1>
            <p className={styles.caption}>
                Sorry, this page has been removed or relocated.
            </p>
            <ArrowLink title='Visit our site' url='https://leffot.com' />
        </main>
    )
}
