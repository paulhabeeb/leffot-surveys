import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import * as styles from './Radio.module.scss'
import { ErrorMessage, InputWrapper } from '@components/forms'

export default function Radio({ id, label, name }) {
    const [field, meta] = useField({
        name,
        type: 'radio',
        value: label,
    })

    return (
        <InputWrapper>
            <input {...field} type='radio' id={id} className='visuallyHidden' />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <ErrorMessage meta={meta} />
        </InputWrapper>
    )
}

Radio.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
}
