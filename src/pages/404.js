import React from 'react'
import { Link } from 'gatsby'

import cn from 'classnames'
import * as styles from './index.module.scss'
import { PageHelmet } from '@components/common'

export default function FourOhFour() {
    return (
        <main className={styles.container}>
            <PageHelmet
                title='404 Error - Page Not Found'
                url='/404'
            />
            <h1 className={styles.title}>Page Not Found</h1>
            <p className={styles.caption}>Sorry, this page has been removed or relocated.</p>
            <Link to='/' className={cn(styles.link, styles.withArrow)}>Go back</Link>
        </main>
    )
}
