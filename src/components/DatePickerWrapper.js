import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from '@material-ui/pickers'
import { handleDate, generalHandler } from '../redux/actions/general'

// eslint-disable-next-line react/prop-types
function DatePickerWrapper({ selectedDate, handleDate, generalHandler }) {
  // const [pickerDate, setPickerDate] = useState(new Date())
  const handleDateChange = date => {
    // setPickerDate(date)
    handleDate(date)
    // generalHandler()
  }

  // useEffect(() => {
  //   generalHandler()
  // }, [selectedDate])

  // console.log(selectedDate)
  return (
    <Fragment>
      <DatePicker
        views={['year', 'month', 'date']}
        format="DD/MM/YYYY"
        label="Select date"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
        style={{ width: '100%' }}
      />
    </Fragment>
  )
}
const mapStateToProps = ({ general }) => ({
  selectedDate: general.selectedDate,
})

const dispatchPropsToState = {
  handleDate,
  generalHandler,
}
export default connect(mapStateToProps, dispatchPropsToState)(DatePickerWrapper)
