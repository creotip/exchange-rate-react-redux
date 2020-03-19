import axios from 'axios'
import config from '../../config'
import isSolid from 'is-solid'

export const actionTypes = {
  SET_DATA: 'SET_DATA',
}

export const setData = (data: object) => ({
  type: actionTypes.SET_DATA,
  data,
})

export const generalHandler = () => async (dispatch: any) => {
  const { apiURL } = config

  try {
    const { data } = await axios.get(apiURL)
    if (!isSolid(data)) return
    dispatch(setData(data))
  } catch (error) {
    console.log(error)
  }
}
