import React from 'react'
import PropTypes from 'prop-types'
import { useField, useFormikContext } from 'formik'

import cn from 'classnames'
import * as styles from './Select.module.scss'
import { ErrorMessage, InputWrapper } from '@components/forms'

export default function RankItem({ name, options, placeholder }) {
    const slugName = name.replace(' ', '-').toLowerCase()
    const { values } = useFormikContext()
    const [field, meta] = useField({
        name,
        type: 'select',
        label: slugName,
    })

    const placeholderIsSelected = values[name] !== undefined ? false : true
    const placeholderEl = (
        <option
            disabled
            selected={placeholderIsSelected}
            key={0}
            value={placeholder}
        >
            {placeholder}
        </option>
    )

    const optionFields = [placeholderEl]
    options.forEach(opt => {
        const disabled = Object.values(values).includes(opt)
        const selected = values[name] === opt ? true : false

        optionFields.push(
            <option
                value={opt}
                disabled={disabled}
                selected={selected}
                key={opt}
            >
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

RankItem.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
}
