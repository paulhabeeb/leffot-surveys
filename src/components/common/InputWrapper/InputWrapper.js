import React from 'react'
import * as styles from './InputWrapper.module.scss'

export default function InputWrapper({ children }) {
    return (
        <div className={styles.inputContainer}>
            {children}
        </div>
    )
}
