import React from 'react'
import * as styles from './SurveyWrapper.module.scss'

export default function SurveyWrapper({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
