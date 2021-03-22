import React from 'react'
import { RichText } from 'prismic-reactjs'
import { body, pageTitle } from './PageHeader.module.scss'

export default function PageHeader({ description, title }) {
    return (
        <>
            <h1 className={pageTitle}>{RichText.asText(title)}</h1>
            <div className={body}>
                <RichText render={description} />
            </div>
        </>
    )
}
