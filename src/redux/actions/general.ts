import axios from 'axios'
import config from '../../config'
import isSolid from 'is-solid'
import moment from 'moment'
import { GeneralState } from '../../constants/interfaces'

export const actionTypes = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_DATA: 'SET_DATA',
  SET_DATE: 'SET_DATE',
  SET_SEARCH_INPUT: 'SET_SEARCH_INPUT',
}

export const setIsLoading = () => ({
  type: actionTypes.SET_IS_LOADING,
})

export const setData = (data: object) => ({
  type: actionTypes.SET_DATA,
  data,
})

export const setDate = (selectedDate: GeneralState) => ({
  type: actionTypes.SET_DATE,
  selectedDate,
})

export const setSearchInput = (searchInput: GeneralState) => ({
  type: actionTypes.SET_SEARCH_INPUT,
  searchInput,
})

export const generalHandler = (date?: GeneralState) => async (dispatch: any, getState: any) => {
  dispatch(setIsLoading())
  const { apiURL } = config
  const selectedDate = isSolid(date) ? date : getState().general.selectedDate
  const parsedSelectedDate = moment(selectedDate).format(config.dateFormat)

  const ApiUrlWithDate = apiURL + parsedSelectedDate
  try {
    const { data } = await axios.get(ApiUrlWithDate)
    if (!isSolid(data)) {
      return
    }
    dispatch(setData(data))
  } catch (error) {
    setData({})
    console.log(error)
  }
}

export const handleDate = (selectedDate: GeneralState) => (dispatch: any) => {
  if (!isSolid(selectedDate)) return
  dispatch(setDate(selectedDate))
  return generalHandler()
}

export const handleSearchInput = (searchInput: GeneralState) => (dispatch: any) => {
  if (!isSolid(searchInput)) return
  dispatch(setSearchInput(searchInput))
}
