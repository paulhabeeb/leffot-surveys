import React from 'react'
import * as styles from './ContactInfo.module.scss'
import { Checkbox, Textarea, TextInput } from '@components/forms'

export default function ContactInfo() {
    return (
        <div className={styles.textInputContainer}>
            <h2 className={styles.tellUs}>Tell us about yourself</h2>
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
    )
}
