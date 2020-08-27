import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Layout from 'components/layout'
import Home from 'pages/home'
import Login from 'pages/login'

const isAuthenticated = () => false
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      exact={true}
      render={() =>
        isAuthenticated() && (rest.path === '/login' || rest.path === '/') ? <Redirect to="/" /> : <Component />
      }
    />
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={() => (isAuthenticated() ? <Component /> : <Redirect to="/login" />)} />
}

export default function Routes() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}
