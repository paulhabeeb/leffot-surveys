import React from 'react'
import cn from 'classnames'
import { RichText } from 'prismic-reactjs'
import * as styles from './PageHeader.module.scss'

export default function PageHeader({ alignCenter, description, title }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>{RichText.asText(title)}</h1>
            <div className={cn(
                styles.body,
                {
                    [styles.alignCenter]: alignCenter,
                },
            )}>
                <RichText render={description} />
            </div>
        </div>
    )
}

PageHeader.defaultProps = {
    alignCenter: false,
}
