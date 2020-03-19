import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DatePickerWrapper from '../components/DatePickerWrapper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import CurrencyWrapper from '../components/CurrencyWrapper'
import { generalHandler } from '../redux/actions/general'

interface HomeProps {
  isLoggedIn: boolean
  isLoading: boolean
  selectedDate: object
  generalHandler: () => void
}

const Title = styled.h2`
  text-align: center;
`

const Home = ({ generalHandler }: HomeProps) => {
  useEffect(() => {
    generalHandler()
  }, [])

  console.log('home rendered')
  return (
    <>
      <Box m={3} style={{ maxWidth: 500, margin: 'auto' }}>
        <Title>Euro foreign exchange reference rates</Title>
        <Grid container spacing={3} style={{ marginBottom: '2rem' }}>
          <Grid item xs={6}>
            <DatePickerWrapper />
          </Grid>
          <Grid item xs={6}>
            <form noValidate autoComplete="on">
              <TextField fullWidth id="search-currency" label="Search..." />
            </form>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ justifyContent: 'center' }}>
          <CurrencyWrapper />
        </Grid>
      </Box>
    </>
  )
}

// TODO remove type any
const mapStateToProps = ({ general, auth }: any) => ({
  data: general.data,
  isLoggedIn: auth.isLoggedIn,
  isLoading: general.isLoading,
  selectedDate: general.selectedDate,
})

const dispatchPropsToState = {
  generalHandler,
}

export default connect(mapStateToProps, dispatchPropsToState)(Home)
