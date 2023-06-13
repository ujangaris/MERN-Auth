import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    // deklarasi hook register
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   pasang useNavigate
  const navigate = useNavigate()
// pasang handle sumbimt form
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((response) => {
        alert('Registration successful')
        console.log(response)
        navigate('/login')
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='text-center'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>
              <strong>name</strong>
            </label>
            <input
              type='name'
              placeholder='Enter name'
              name='name'
              className='form-control'
              autoComplete='off'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button
            type='submit'
            className='btn btn-success w-100 rounded-0 my-2'
          >
            Register
          </button>
          <p>
            Already have an account?
            <Link to='/login' className='text-decoration-none mx-2 '>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
