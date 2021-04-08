import { hex } from 'wcag-contrast'

export const checkIfNeedsLightText = color => {
    const backgroundColor =
        color !== null && color !== undefined ? color : '#ffffff'

    // Sometimes both light and dark might have an appropriate
    // ratio. We default to dark.
    if (hex(backgroundColor, '#222222') > 4.5) {
        return false
    }

    return true
}
