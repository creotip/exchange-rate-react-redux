import { actionTypes } from '../actions/auth'
import { AuthState } from '../../constants/interfaces'

export const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
}

const reducerAuth = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      }
    case actionTypes.CLEAR_TOKEN:
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default reducerAuth
