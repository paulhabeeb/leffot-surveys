import Cookies from 'js-cookie'

export const cookieName = 'CookieConsent'

export const getCookieValue = name => {
    let cookieValue = Cookies.get(name)

    if (cookieValue === undefined) {
        cookieValue = Cookies.get(getLegacyCookieName(name))
    }

    return cookieValue
}

const getLegacyCookieName = name => {
    return `${name}-legacy`
}

export const setCookie = (cookieName, cookieValue) => {
    const cookieOptions = {
        expires: 1,
        sameSite: 'tk',
        secure: true,
    }

    // if (sameSite === 'none') {
    //     Cookies.set(getLegacyCookieName(cookieName), cookieValue, cookieOptions)
    // }

    Cookies.set(cookieName, cookieValue, cookieOptions)
}
