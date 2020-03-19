import { actionTypes } from '../actions/general'
import moment from 'moment'

export const initialState: any = {
  isLoading: false,
  data: {},
  selectedDate: new Date(),
  searchInput: '',
}

const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return {
        isLoading: true,
      }
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      }
    case actionTypes.SET_DATE:
      return {
        ...state,
        selectedDate: action.selectedDate,
      }
    case actionTypes.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: state.searchInput,
      }
    default:
      return state
  }
}

export default generalReducer
