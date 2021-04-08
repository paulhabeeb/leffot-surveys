import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()
export const useThemeContext = () => useContext(ThemeContext)

export default function ThemeContextProvider({ children, theme }) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
}
