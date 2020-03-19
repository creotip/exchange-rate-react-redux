import { actionTypes } from '../actions/auth'

export const initialState: any = {
  token: '',
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

    default:
      return state
  }
}

export default reducerAuth
