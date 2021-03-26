import Cookies from 'js-cookie'

export const cookieName = {
    consent: 'CookieConsent',
    voted: 'hasVoted',
}

export const getCookieValue = name => {
    return Cookies.get(name)
}

export const setCookie = (cookieName, cookieValue) => {
    const cookieOptions = {
        expires: 1,
        sameSite: 'lax',
        secure: true,
    }

    Cookies.set(cookieName, cookieValue, cookieOptions)
}
