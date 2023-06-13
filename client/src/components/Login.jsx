import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  // Deklarasi hooks for email & passsword
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // pasang handleSumbmit form
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((response) => {
        alert('Login successfully')
        console.log(response)
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='text-center'>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              className='form-control'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
          {/* <p>Your are agree to aour term and policies</p> */}
          {/* <button className='btn btn-default border w-100 bg-light text-decoration-non rounded-0'>
            Create Account
          </button> */}
        </form>
      </div>
    </div>
  )
}

export default Login
