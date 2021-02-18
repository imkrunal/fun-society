import * as React from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { Input, Layout } from '../components'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import axios from 'axios'
import { handleFormErrors } from '../utils/helpers'
import { useHistory } from 'react-router-dom'

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
})

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - 64px)',
    padding: theme.spacing(5),
  },
  loginWrapper: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  loginTitle: {
    marginBottom: theme.spacing(2),
  },
}))

const Login = () => {
  const classes = useStyles()
  const history = useHistory()
  const mutation = useMutation(
    (values) => axios.post('/api/auth/login', values),
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.data.token)
        history.push('/')
      },
    },
  )
  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid
          className={classes.container}
          container
          justify="center"
          alignItems="center"
        >
          <Grid md={3} item>
            <Paper className={classes.loginWrapper} variant="outlined">
              <Typography
                variant="h4"
                component="h1"
                className={classes.loginTitle}
              >
                Login
              </Typography>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={(values, { setFieldError }) =>
                  mutation.mutate(values, setFieldError)
                }
              >
                {({ handleSubmit }) => (
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Input
                          label="Email Address"
                          name="email"
                          type="email"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Input
                          label="Password"
                          name="password"
                          type="password"
                          required
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember Me"
                          />
                        </Grid>
                        <Button
                          size="large"
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Login
