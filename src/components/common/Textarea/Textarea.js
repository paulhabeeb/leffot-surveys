import React from 'react'
import { useField } from 'formik'

import cn from 'classnames'
import * as styles from './Textarea.module.scss'
import { ErrorMessage, InputLabel, InputWrapper } from '@components/common'

export default function Textarea({ label, status, ...props }) {
    const [field, meta] = useField(props)

    return (
        <InputWrapper>
            <InputLabel
                label={label}
                status={status}
                {...props}
            />
            <textarea
                {...field}
                {...props}
                className={cn(
                    styles.input,
                    { [styles.errorBorder]: meta.touched && meta.error },
                )}
            />
            <ErrorMessage meta={meta} />
        </InputWrapper>
    )
}
