import React from 'react'
import { connect } from 'react-redux'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { generalHandler } from './redux/actions/general'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Loader from './components/Loader'
import { RootState } from './constants/interfaces'

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

const mapStateToProps = ({ auth, general }: RootState) => ({
  data: general.data,
  isLoggedIn: auth.isLoggedIn,
  isLoading: general.isLoading,
  selectedDate: general.selectedDate,
})

const dispatchPropsToState = {
  generalHandler,
}

export default connect(mapStateToProps, dispatchPropsToState)(App)
