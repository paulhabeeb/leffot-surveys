import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './SurveyWrapper.module.scss'

export default function SurveyWrapper({ children }) {
    return <section className={styles.container}>{children}</section>
}

SurveyWrapper.propTypes = {
    children: PropTypes.node,
}
