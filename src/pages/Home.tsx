import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DatePickerWrapper from '../components/DatePickerWrapper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import CurrencyWrapper from '../components/CurrencyWrapper'
import { generalHandler } from '../redux/actions/general'
import isSolid from 'is-solid'
import { RootState } from '../constants/interfaces'

interface HomeProps {
  data: any
  isLoggedIn: boolean
  isLoading: boolean
  selectedDate: object
  generalHandler: () => void
}

const Title = styled.h2`
  text-align: center;
`

const Home = ({ data, generalHandler }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState({})

  const handleSearch = (e: any) => {
    const term = e.target.value
    if (isSolid(term)) {
      setSearchTerm(term)
      const filteredDataKeys = Object.keys(data.rates).filter(item => item.toLowerCase().includes(term.toLowerCase()))
      let filteredDataBySearchTerm = {} as any
      filteredDataKeys.forEach(key => {
        filteredDataBySearchTerm[key] = data.rates[key]
      })
      setFilteredData(filteredDataBySearchTerm)
    } else {
      setSearchTerm('')
      setFilteredData(data.rates)
    }
  }

  useEffect(() => {
    generalHandler()
  }, [])

  useEffect(() => {
    if (isSolid(data)) {
      setFilteredData(data.rates)
    }
  }, [data])

  return (
    <>
      <Box p={2} m={3} style={{ maxWidth: 500, margin: 'auto' }}>
        <Title>Euro foreign exchange reference rates</Title>
        <Grid container spacing={3} style={{ marginBottom: '2rem' }}>
          <Grid item xs={6}>
            <DatePickerWrapper />
          </Grid>
          <Grid item xs={6}>
            <form noValidate autoComplete="on">
              <TextField onChange={handleSearch} fullWidth id="search-currency" label="Search..." />
            </form>
          </Grid>
        </Grid>
        {isSolid(filteredData) && (
          <Grid container spacing={3} style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <CurrencyWrapper rates={filteredData} />
          </Grid>
        )}
      </Box>
    </>
  )
}

const mapStateToProps = ({ general, auth }: RootState) => ({
  data: general.data,
  isLoggedIn: auth.isLoggedIn,
  isLoading: general.isLoading,
  selectedDate: general.selectedDate,
})

const dispatchPropsToState = {
  generalHandler,
}

export default connect(mapStateToProps, dispatchPropsToState)(Home)
