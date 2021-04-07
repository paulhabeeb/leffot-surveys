import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import qs from 'qs'

import { SectionTitle } from '@components/common'
import FormActions from './FormActions'

export default function SurveyForm({
    children,
    errorMessage,
    errorTitle,
    formName,
    maxSelections,
    minSelections,
    shoes,
}) {
    if (shoes.length < minSelections || shoes.length > maxSelections) {
        return <SectionTitle description={errorMessage} title={errorTitle} />
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        joinEmailList: false,
        comments: '',
    }
    const validationSchema = {
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Please enter a valid email address'),
        joinEmailList: Yup.boolean(),
        comments: Yup.string(),
    }

    const initialRankings = {}
    shoes.forEach(shoe => {
        const initValue = 'Select a rank'
        const name = RichText.asText(shoe.primary.item_name.raw)

        initialRankings[name] = initValue
        validationSchema[name] = Yup.string()
            .notOneOf([initValue], 'Please select a rank')
            .required('Please select a rank')
    })

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

    const handleSubmit = async (values, { setStatus }) => {
        const setSubmissionError = () => {
            setStatus({
                error:
                    'There was a problem submitting the form. Please try again later.',
            })
        }

        try {
            const response = await axios({
                method: 'post',
                url: '/',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: getFormData(values),
            })

            // Form submission is so fast that we introduce a little lag
            // so it seems like something is actually getting *submitted*.
            setTimeout(() => {
                if (response.status === 200) {
                    navigate('/success')
                } else {
                    setSubmissionError()
                }
            }, 600)
        } catch (error) {
            console.log(error)
            setSubmissionError()
        }
    }

    return (
        <Formik
            initialValues={{
                ...initialValues,
                ...initialRankings,
            }}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, resetForm, status }) => (
                <Form name={formName} data-netlify='true'>
                    {children}
                    <FormActions />
                </Form>
            )}
        </Formik>
    )
}

SurveyForm.propTypes = {
    children: PropTypes.node,
    errorMessage: PropTypes.array,
    formName: PropTypes.string,
    maxSelections: PropTypes.number,
    minSelections: PropTypes.number,
    shoes: PropTypes.array,
}
