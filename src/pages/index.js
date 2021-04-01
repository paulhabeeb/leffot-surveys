import React from 'react'
import * as styles from './index.module.scss'
import { Seo } from '@components/common'

export default function Home() {
    return (
        <main className={styles.container}>
            <Seo
                title='Leffot'
                url='/'
            />
            <h1 className={styles.title}>Leffot</h1>
            <p className={styles.caption}>There’s not much to see here.</p>
            <a href='https://leffot.com' className={styles.link}>Visit our site</a>
        </main>
    )
}
