import * as React from 'react'
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { HiOutlineMenu, HiOutlineUserCircle } from 'react-icons/hi'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
}))

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const classes = useStyles()
  const history = useHistory()
  let loggedIn = false
  const token = localStorage.getItem('token')
  if (token && token !== null && token !== '') {
    loggedIn = true
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <HiOutlineMenu />
        </IconButton>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
        >
          Fun Society
        </Typography>
        {!loggedIn && (
          <Button onClick={() => history.push('/login')} color="inherit">
            Login
          </Button>
        )}
        {loggedIn && (
          <>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <HiOutlineUserCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                onClick={() => {
                  localStorage.removeItem('token')
                  history.push('/login')
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
