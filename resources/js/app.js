import * as React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'
require('./bootstrap')

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <Button color="primary" variant="contained">
      Primary
    </Button>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
