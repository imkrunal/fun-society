import * as React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import Router from './utils/router'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
require('./bootstrap')

const queryClient = new QueryClient()
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </QueryClientProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
