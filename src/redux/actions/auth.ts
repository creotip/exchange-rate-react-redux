import axios from 'axios'
import config from '../../config'
import { AuthState } from '../../constants/interfaces'

export const actionTypes = {
  SET_TOKEN: 'SET_TOKEN',
  CLEAR_TOKEN: 'CLEAR_TOKEN',
  SET_IS_LOADING: 'SET_IS_LOADING',
}

export const setToken = (token: AuthState) => ({
  type: actionTypes.SET_TOKEN,
  token,
})

export const clearToken = () => ({
  type: actionTypes.CLEAR_TOKEN,
})

export const loginHandler = (email: string, password: string) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.SET_IS_LOADING,
  })
  const { loginUrl } = config
  const loginData = {
    email,
    password,
  }
  try {
    const { data } = await axios.post(loginUrl, loginData)

    dispatch(setToken(data.token))
  } catch (err) {
    console.log(err)
  }
}

export const logoutHandler = () => (dispatch: any) => {
  dispatch(clearToken())
  localStorage.clear()
}
