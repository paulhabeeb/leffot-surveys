import React from 'react'
import { navigate } from 'gatsby'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import qs from 'qs'

import * as styles from './RankForm.module.scss'
import { Button } from '@components/common'

export default function RankForm({
    buttonText,
    initialValues,
    selectionsList,
    validationSchema,
}) {
    const formName = 'alden-poll-march-2021'

    const getFormData = values => {
        const formValues = {
            'form-name': formName,
        }

        Object.keys(values).forEach(key => {
            const rank = values[key]
            formValues[`rank-${rank}`] = key
        })

        return qs.stringify(formValues)
    }

    const handleSubmit = async (values, { resetForm, setStatus, setSubmitting }) => {
        try {
            const response = await axios({
                method: 'post',
                url: '/',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: getFormData(values),
            })

            console.log(response)
            // Set a cookie
            // document.cookie = "test1=Hello!; max-age=3600" // eslint-disable-line no-undef
            navigate('/success')
        } catch (error) {
            console.log(error)
            setStatus({
                error: 'There was a problem submitting the form. Please try again later.'
            })
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, resetForm, status }) => (
                <Form name={formName} data-netlify="true">
                    <input type='hidden' name='rank-1' value='' />
                    <input type='hidden' name='rank-2' value='' />
                    <input type='hidden' name='rank-3' value='' />
                    <input type='hidden' name='rank-4' value='' />
                    <input type='hidden' name='rank-5' value='' />
                    <ul className={styles.container}>{selectionsList}</ul>
                    <div className={styles.actions}>
                        <Button
                            label={buttonText}
                            kind='primary'
                            type='submit'
                            isSubmitting={isSubmitting}
                        />
                        <Button
                            label='Reset rankings'
                            kind='secondary'
                            type='button'
                            onClick={resetForm}
                        />
                    </div>
                    {status && status.error && <div className={styles.errors}>{status.error}</div>}
                </Form>
            )}
        </Formik>
    )
}
