import { actionTypes } from '../actions/general'

export const initialState: any = {
  data: {},
}

const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
      }

    default:
      return state
  }
}

export default generalReducer
