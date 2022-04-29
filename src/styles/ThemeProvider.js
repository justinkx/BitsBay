import React, { useState, useEffect, useMemo, memo } from 'react'

import { getTheme, setTheme } from '../services/StorageService'
import Themes from './Themes'

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState()

  useEffect(() => {
    async function init() {
      const storedThemeID = await getTheme()
      setThemeID(storedThemeID)
    }
    init()
  }, [])

  const themeService = useMemo(
    () => ({
      setTheme: async (themeId = 'dark') => {
        setThemeID(themeId)
        setTheme(themeId)
      },
      theme: Themes[themeID],
      themeID,
    }),
    [themeID]
  )

  return (
    <ThemeContext.Provider value={{ ...themeService }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  )
}

export default memo(ThemeContextProvider)
