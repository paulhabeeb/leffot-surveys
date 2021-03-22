import React from 'react'
import cn from 'classnames'
import * as styles from './Layout.module.scss'

export default function Layout({ children, id }) {
    const className = cn(
        styles.container,
        {
            [styles.whiteBorder]: id === 'splash-page',
            [styles.darkGreyBorder]: id === 'pick-five',
            [styles.primaryBorder]: id === 'rank-shoes',
        },
    )
    
    return (
        <section className={className} id={id}>
            {children}
        </section>
    )
}
