import React from 'react'
import { useField } from 'formik'
import * as styles from './CheckboxInput.module.scss'
import { ErrorMessage, InputWrapper } from '@components/common'

export default function CheckboxInput({ children, name }) {
    const [field, meta] = useField({
        name,
        type: 'checkbox',
    })

    return (
        <InputWrapper>
            <input
                {...field}
                id={name}
                type='checkbox'
                className='visuallyHidden'
            />
            <label htmlFor={name} className={styles.label}>
                {children}
            </label>
            <ErrorMessage meta={meta} />
        </InputWrapper>
    )
}
