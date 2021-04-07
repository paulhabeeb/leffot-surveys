import { hex } from 'wcag-contrast'

export const getAccessibleTextColor = (background, foreground) => {
    if (background === null) {
        return null
    }

    const light = '#ffffff'
    const dark = '#222222'

    // If no foreground color is supplied, default to dark
    const newForeground = foreground === null ? dark : foreground

    if (hex(background, newForeground) < 4.5) {
        // Sometimes both light and dark might have an appropriate
        // ratio. We default to dark.
        if (hex(background, dark) > 4.5) {
            return dark
        }

        // If dark doesn't work, try light. Note that if light fails,
        // then we end up returning newForeground, i.e., we just
        // give the user what they want.
        if (hex(background, light) > 4.5) {
            return light
        }
    }

    return newForeground
}

// Set global css vars that get used by components throughout the site
export const setThemeColors = (splashScreen, sectionTitle) => {
    // Splash screen
    document.documentElement.style.setProperty(
        '--splash-screen-bg',
        splashScreen.background
    )
    const splashTextColor = getAccessibleTextColor(
        splashScreen.background,
        splashScreen.text
    )
    document.documentElement.style.setProperty(
        '--splash-screen-text',
        splashTextColor
    )
    document.documentElement.style.setProperty(
        '--splash-screen-link',
        splashTextColor
    )

    // Section titles
    document.documentElement.style.setProperty(
        '--section-title-bg',
        sectionTitle.background
    )
    const sectionTitleTextColor = getAccessibleTextColor(
        sectionTitle.background,
        sectionTitle.text
    )
    document.documentElement.style.setProperty(
        '--section-title-text',
        sectionTitleTextColor
    )
    document.documentElement.style.setProperty(
        '--section-title-link',
        sectionTitleTextColor
    )
}
