import React from 'react'
import { Route } from 'react-router-dom'

interface PrivateRouteProps {
  exact?: boolean
  path: string
  component: React.ComponentType<any>
}
const PrivateRoute = ({ component: Component, ...otherProps }: PrivateRouteProps) => {
  return (
    <>
      <header>Logged In Header</header>
      <Route render={otherProps => <Component {...otherProps} />} />
      <footer>Logged In Footer</footer>
    </>
  )
}
export default PrivateRoute
