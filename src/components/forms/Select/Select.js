import React from 'react'
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'

import cn from 'classnames'
import * as styles from './Select.module.scss'
import { ErrorMessage, InputWrapper } from '@components/forms'

export default function Select({ name, options, placeholder }) {
    const slugName = name.replace(' ', '-').toLowerCase()
    const { values } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: slugName,
    })

    const placeholderEl = (
        <option disabled key={0} value={placeholder}>
            {placeholder}
        </option>
    )

    const optionFields = [placeholderEl]
    options.forEach(opt => {
        const disabled = Object.values(values).includes(opt)

        optionFields.push(
            <option value={opt} disabled={disabled} key={opt}>
                {opt}
            </option>
        )
    })

    return (
        <InputWrapper>
            <select
                {...field}
                className={cn(styles.selectRank, {
                    [styles.errorBorder]: meta.touched && meta.error,
                })}
            >
                {optionFields}
            </select>
            <ErrorMessage customStyles={styles.error} meta={meta} />
        </InputWrapper>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
}
