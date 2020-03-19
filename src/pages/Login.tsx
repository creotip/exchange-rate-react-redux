import React from 'react'
import { connect } from 'react-redux'
import { loginHandler } from '../redux/actions/auth'

interface LoginProps {
  loginHandler: any
}

const Login = ({ loginHandler }: LoginProps) => {
  return (
    <div>
      <div>login</div>
      <button onClick={() => loginHandler('eve.holt@reqres.in', 'cityslicka')}>click here</button>
    </div>
  )
}

const mapDispatchToProps = {
  loginHandler: loginHandler,
}
export default connect(null, mapDispatchToProps)(Login)
