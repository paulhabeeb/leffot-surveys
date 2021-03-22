import React from 'react'
import { container } from './Layout.module.scss'

export default function Layout({ children }) {
    return (
        <main className={container}>
            {children}
        </main>
    )
}
