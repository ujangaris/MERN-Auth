import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-secondary vh-100'>
      <h1 className='text-light'>Welcome to Home Page</h1>
      <div className='button'>
        <Link to='/login' className='btn btn-primary mx-2'>
          back to login
        </Link>
        <Link to='/register' className='btn btn-success'>
          back to register
        </Link>
      </div>
    </div>
  )
}

export default Home
