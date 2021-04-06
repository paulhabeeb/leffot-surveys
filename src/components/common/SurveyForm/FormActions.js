import React from 'react'
import { useFormikContext } from 'formik'

import * as styles from './FormActions.module.scss'
import { Button } from '@components/common'

export default function FormActions() {
    const { isSubmitting, resetForm, status } = useFormikContext()

    return (
        <>
            <div className={styles.actions}>
                <Button
                    label='Submit'
                    kind='primary'
                    type='submit'
                    isSubmitting={isSubmitting}
                />
                <Button
                    label='Reset form'
                    kind='secondary'
                    type='button'
                    onClick={resetForm}
                />
            </div>
            {status && status.error && (
                <div className={styles.errors}>{status.error}</div>
            )}
        </>
    )
}
