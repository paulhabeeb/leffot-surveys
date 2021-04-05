import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import * as styles from './Checkbox.module.scss'
import { ErrorMessage, InputWrapper } from '@components/forms'

export default function Checkbox({ children, name }) {
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

Checkbox.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
}
