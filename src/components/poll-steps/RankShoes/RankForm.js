import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import qs from 'qs'

import * as styles from './RankForm.module.scss'
import { Button } from '@components/common'
import { Checkbox, Textarea, TextInput } from '@components/forms'

export default function RankForm({
    buttonText,
    formName,
    initialShoes,
    initialValues,
    shoesList,
    validationSchema,
}) {
    const getFormData = values => {
        const formValues = {
            'form-name': formName,
        }

        Object.keys(values).forEach(key => {
            // Shoes being ranked are stored in formik with the shoe
            // name as the key and the rank as the value. We swap those
            // here so each form submission has rank-1, rank-2, etc.
            // But we don't touch anything in initalValues, which are the
            // form fields like firstName, email address, etc.
            if (Object.keys(initialValues).includes(key)) {
                formValues[key] = values[key]
            } else {
                const rank = values[key]
                formValues[`rank-${rank}`] = key
            }
        })

        return qs.stringify(formValues)
    }

    const handleSubmit = async (
        values,
        { resetForm, setStatus, setSubmitting }
    ) => {
        try {
            const response = await axios({
                method: 'post',
                url: '/',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: getFormData(values),
            })

            console.log(response)

            navigate('/success')
        } catch (error) {
            console.log(error)
            setStatus({
                error:
                    'There was a problem submitting the form. Please try again later.',
            })
        }
    }

    const hiddenInputs = []
    const numberOfHiddenInputs = Object.keys(initialShoes).length
    for (let i = 1; i <= numberOfHiddenInputs; i++) {
        hiddenInputs.push(
            <input type='hidden' name={`rank-${i}`} value='' key={i} />
        )
    }

    return (
        <Formik
            initialValues={{
                ...initialValues,
                ...initialShoes,
            }}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, resetForm, status }) => (
                <Form name={formName} data-netlify='true'>
                    {hiddenInputs}
                    <ul className={styles.listContainer}>{shoesList}</ul>
                    <div className={styles.textInputContainer}>
                        <h2 className={styles.tellUs}>
                            Tell us about yourself
                        </h2>
                        <div className={styles.flex}>
                            <TextInput
                                label='First name'
                                name='firstName'
                                type='text'
                                placeholder='First name'
                            />
                            <TextInput
                                label='Last name'
                                name='lastName'
                                type='text'
                                placeholder='Last name'
                            />
                        </div>
                        <TextInput
                            label='Email address'
                            name='email'
                            type='text'
                            placeholder='you@example.com'
                            status='Required'
                        />
                        <Checkbox name='joinEmailList'>
                            Join our mailing list to receive news, etc.
                        </Checkbox>
                        <Textarea
                            label='Leave a comment'
                            name='comments'
                            placeholder='Hoping for a different model? Have other thoughts? Let us know.'
                        />
                    </div>
                    <div className={styles.actions}>
                        <Button
                            label={buttonText}
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
                </Form>
            )}
        </Formik>
    )
}

RankForm.propTypes = {
    buttonText: PropTypes.string,
    initialShoes: PropTypes.object,
    initialValues: PropTypes.object,
    shoesList: PropTypes.array,
    validationSchema: PropTypes.object,
}
