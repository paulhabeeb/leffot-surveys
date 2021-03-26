import React, { useEffect, useState } from 'react'
import { cookieName, getCookieValue, setCookie } from '@lib/cookies'
import * as styles from './CookieBanner.module.scss'

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        const cookieValue = getCookieValue(cookieName.consent)

        if (cookieValue === undefined) {
            setShowBanner(true)
        }
    }, [])

    const accept = () => {
        setCookie(cookieName.consent, true)
        setShowBanner(false)
    }

    const decline = () => {
        setCookie(cookieName.consent, false)
        setShowBanner(false)
    }

    if (!showBanner) return null

    return (
        <div className={styles.container}>
            <h2>This site uses cookies</h2>
            <p>We use cookies</p>
            <div>
                <button
                    className={styles.acceptButton}
                    onClick={accept}
                    onKeyPress={accept}
                >
                    Allow cookies
                </button>
                <button
                    className={styles.denyButton}
                    onClick={decline}
                    onKeyPress={decline}
                >
                    Opt out of cookies
                </button>
            </div>
        </div>
    )
}
