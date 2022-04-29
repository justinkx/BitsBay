import React, { useState, useEffect, useMemo, memo } from 'react'

import { getTheme, setTheme } from '../services/StorageService'
import Themes from './Themes'

export const ThemeContext = React.createContext()

const ThemeContextProvider = ({ children }) => {
  const [themeID, setThemeID] = useState()

  useEffect(() => {
    ;(async () => {
      const storedThemeID = await getTheme()
      setThemeID(storedThemeID)
    })()
  }, [])

  const themeService = useMemo(
    () => ({
      getTheme: () => Themes[themeID],
      setTheme: async (themeId = 'dark') => {
        setThemeID(themeId)
        await setTheme(themeId)
      },
    }),
    [themeID]
  )
  return (
    <ThemeContext.Provider value={{ themeService, theme: Themes[themeID] }}>
      {themeID ? children : null}
    </ThemeContext.Provider>
  )
}

export default memo(ThemeContextProvider)
