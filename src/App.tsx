import React from 'react'
import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Routes from './Routes'
import GlobalStyles from './global.ts'
// import Footer from './components/Footer/Footer'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      dark: '#4a69bd',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Routes />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  )
}
