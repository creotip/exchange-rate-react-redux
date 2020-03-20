import React from 'react'
import { connect } from 'react-redux'
import { loginHandler } from '../redux/actions/auth'
import { Paper, Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import isSolid from 'is-solid'

interface LoginProps {
  loginHandler: any
}

const LoginWrapper = styled(Paper)`
  max-width: 350px;
  margin: 2rem auto;
  padding: 1rem;
`

const Login = ({ loginHandler }: LoginProps) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = () => {
    loginHandler('eve.holt@reqres.in', 'cityslicka')
  }

  return (
    <LoginWrapper>
      <h4>Enter your credentials</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            inputRef={register({ required: true })}
            id="outlined-basic"
            label="email"
            variant="outlined"
            helperText={errors.email && 'Fill in email'}
            error={isSolid(errors.email)}
            name="email"
          />
        </Box>
        <Box mb={2}>
          <TextField
            inputRef={register({ required: true, maxLength: 20 })}
            id="outlined-basic-2"
            label="password"
            variant="outlined"
            helperText={errors.password && 'Fill in password'}
            name="password"
            error={isSolid(errors.password)}
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary">
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
