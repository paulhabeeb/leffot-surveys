import React from 'react'
import * as styles from './index.module.scss'
import { ArrowLink, PageHelmet } from '@components/common'

export default function Home() {
    const title = 'Leffot Surveys'

    return (
        <main className={styles.container}>
            <PageHelmet title={title} url='' />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.caption}>There’s not much to see here.</p>
            <ArrowLink title='Visit our site' url='https://leffot.com' />
        </main>
    )
}
