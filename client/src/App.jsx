import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='text-center'>Sign-In</h2>
        <form action=''>
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

export default App
