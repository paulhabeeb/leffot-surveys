import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import cn from 'classnames'
import * as styles from './ProgressButton.module.scss'

export default function ProgressButton({ error, label, isEnabled, stateToPass, url }) {
    const onClick = (event) => {
        if (!isEnabled) {
            event.preventDefault()
            console.log('error')
        }
    }
    
    return (
        <>
            <AniLink
                className={cn(
                    styles.button,
                    {
                        [styles.isDisabled]: !isEnabled,
                    },
                )}
                cover
                direction="left"
                duration={.35}
                bg="#f1f1f1"
                to={url}
                onClick={onClick}
                state={stateToPass}
            >
                {label}
            </AniLink>
            <div>{error}</div>
        </>
    )
}
