import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './InputWrapper.module.scss'

export default function InputWrapper({ children }) {
    return <div className={styles.inputContainer}>{children}</div>
}

InputWrapper.propTypes = {
    children: PropTypes.node,
}
