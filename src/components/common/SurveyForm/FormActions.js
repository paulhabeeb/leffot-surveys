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
                    disabled={isSubmitting}
                    kind='primary'
                    label='Submit'
                    isSubmitting={isSubmitting}
                    type='submit'
                />
                <Button
                    disabled={isSubmitting}
                    kind='secondary'
                    label='Reset form'
                    onClick={resetForm}
                    type='button'
                />
            </div>
            {status && status.error && (
                <div className={styles.errors}>{status.error}</div>
            )}
        </>
    )
}
