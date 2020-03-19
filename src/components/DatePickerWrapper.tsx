import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from '@material-ui/pickers'
import { handleDate, generalHandler } from '../redux/actions/general'

// eslint-disable-next-line react/prop-types
function DatePickerWrapper({ handleDate, generalHandler }: any) {
  const [pickerDate, setPickerDate] = useState(new Date())
  const handleDateChange = (date: any) => {
    setPickerDate(date)
    handleDate(date)
    generalHandler(date)
  }

  return (
    <Fragment>
      <DatePicker
        views={['year', 'month', 'date']}
        format="DD/MM/YYYY"
        label="Select date"
        value={pickerDate}
        onChange={handleDateChange}
        animateYearScrolling
        style={{ width: '100%' }}
      />
    </Fragment>
  )
}

const dispatchPropsToState = {
  handleDate,
  generalHandler,
}
export default connect(null, dispatchPropsToState)(DatePickerWrapper)
