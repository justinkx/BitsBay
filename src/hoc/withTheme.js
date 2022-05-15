import React, { useContext } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { ThemeContext } from '../styles/ThemeProvider'

export const withTheme = (Component) => {
  const Consumer = (props) => {
    const themeProps = useContext(ThemeContext)
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    return <Component {...props} {...themeProps} />
  }
  return hoistNonReactStatics(Consumer, Component)
}
