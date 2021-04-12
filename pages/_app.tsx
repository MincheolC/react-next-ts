import '../styles/globals.css'
import React from 'react'
import PropTypes from 'prop-types'
import { AppProps } from 'next/app'
import ContextProvider from '../components/utility/ContextProvider'
import CThemeProvider from '../components/utility/CThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ContextProvider>
      <CThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </CThemeProvider>
    </ContextProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
