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

        return light
    }

    return newForeground
}

export const setThemeColors = (splashScreen, sectionTitle) => {
    document.documentElement.style.setProperty(
        '--splash-screen-bg',
        splashScreen.background
    )
    document.documentElement.style.setProperty(
        '--splash-screen-text',
        getAccessibleTextColor(splashScreen.background, splashScreen.text)
    )
    document.documentElement.style.setProperty(
        '--section-title-bg',
        sectionTitle.background
    )
    document.documentElement.style.setProperty(
        '--section-title-text',
        getAccessibleTextColor(sectionTitle.background, sectionTitle.text)
    )
}
