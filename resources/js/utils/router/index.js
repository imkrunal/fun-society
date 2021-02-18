import * as React from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('../../pages/Home'))
const Login = React.lazy(() => import('../../pages/Login'))

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
