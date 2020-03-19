import React from 'react'
import { Route } from 'react-router-dom'

interface PublicRouteProps {
  exact?: boolean
  path: string
  component: React.ComponentType<any>
}
const PublicRoute = ({ component: Component, ...otherProps }: PublicRouteProps) => (
  <>
    <header>Logged out In Header</header>
    <Route render={otherProps => <Component {...otherProps} />} />
    <footer>Logged out Footer</footer>
  </>
)
export default PublicRoute
