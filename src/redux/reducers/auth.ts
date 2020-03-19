import { actionTypes } from '../actions/auth'

export const initialState: any = {
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
