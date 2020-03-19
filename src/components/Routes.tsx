import * as React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
// import Landing from '../components/pages/Landing'

// import LogOut from '../components/pages/LogOut'
// import NotFound from '../components/pages/NotFound'
// import Terms from '../components/pages/Terms'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routes = () => {
  return (
    <Switch>
      {/* <PublicRoute path="/" exact={true} component={Landing} /> */}
      <PublicRoute path="/login" exact={true} component={Login} />
      {/* <PrivateRoute path="/log-out" exact={true} component={LogOut} /> */}
      <PrivateRoute path="/home" exact={true} component={Home} />
      {/* <Route path="/terms" exact={true} component={Terms} />
      <Route component={NotFound} /> */}
    </Switch>
  )
}
export default Routes
