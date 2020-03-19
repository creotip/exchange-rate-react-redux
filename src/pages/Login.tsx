import React from 'react'
import { connect } from 'react-redux'
import { loginHandler } from '../redux/actions/auth'
import { Paper, Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

interface LoginProps {
  loginHandler: any
}

const LoginWrapper = styled(Paper)`
  max-width: 350px;
  margin: 2rem auto;
  padding: 1rem;
`

const FormWrapper = styled.form``

const Login = ({ loginHandler }: LoginProps) => {
  return (
    <LoginWrapper>
      <h4>Enter your credentials</h4>
      <form noValidate autoComplete="off">
        <Box mb={2}>
          <TextField id="outlined-basic" label="email" variant="outlined" />
        </Box>
        <Box mb={2}>
          <TextField id="outlined-basic" label="password" variant="outlined" />
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={() => loginHandler('eve.holt@reqres.in', 'cityslicka')}>
            Primary
          </Button>
        </Box>
      </form>
    </LoginWrapper>
  )
}

const mapDispatchToProps = {
  loginHandler: loginHandler,
}
export default connect(null, mapDispatchToProps)(Login)
