import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { createBrowserHistory } from 'history'
import { generalHandler } from './redux/actions/general'
// import { Route, Router } from 'react-router-dom'
// import Routes from './components/Routes'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'

// const history = createBrowserHistory()

interface AppProps {
  isLoggedIn: boolean
  generalHandler: () => void
}

function App({ isLoggedIn, generalHandler }: AppProps) {
  useEffect(() => {
    // if (!isLoggedIn) {
    //   history.push('login')
    // } else history.push('home')
    generalHandler()
  }, [isLoggedIn])

  return (
    <div className="App">
      {/* <Router history={history}>
        <div>Navigation</div>
        <Route component={Routes} />
      </Router> */}
      <Header />
      {isLoggedIn ? <Home /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({ general, auth }: any) => ({
  data: general.data,
  isLoggedIn: auth.isLoggedIn,
})

const dispatchPropsToState = {
  generalHandler,
}

export default connect(mapStateToProps, dispatchPropsToState)(App)
