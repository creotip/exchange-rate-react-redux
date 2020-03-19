import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { generalHandler } from './redux/actions/general'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Loader from './components/Loader'

interface AppProps {
  isLoggedIn: boolean
  isLoading: boolean
  selectedDate: object
  generalHandler: () => void
}

function App({ isLoggedIn, isLoading }: AppProps) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        {isLoading && <Loader />}
        {isLoggedIn && <Header />}
        {isLoggedIn ? <Home /> : <Login />}
      </div>
    </MuiPickersUtilsProvider>
  )
}

// TODO remove type any
const mapStateToProps = ({ general, auth }: any) => ({
  data: general.data,
  isLoggedIn: auth.isLoggedIn,
  isLoading: general.isLoading,
  selectedDate: general.selectedDate,
})

const dispatchPropsToState = {
  generalHandler,
}

export default connect(mapStateToProps, dispatchPropsToState)(App)
