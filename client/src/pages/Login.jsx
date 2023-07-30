import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import newRequest from '../utils/newRequests'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await newRequest.post('/auth/login', { username, password })
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div className='mx-auto'>
      <div className='sm:flex sm:flex-row  md:flex justify-center items-center h-screen grid-cols-2 max-w-[1240px] m-auto'>
        <div className=' flex flex-col  basis-2/4 shadow-md px-5 h-3/5 py-5 '>
          <h4 className='text-5xl font-bold text-center m-5'>Login</h4>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <input
              type='username'
              placeholder='Enter your username'
              className='my-4 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" '
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Enter your password'
              className='my-4 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" '
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className='bg-[#002c3e] text-[#FFC16E] px-8 py-3 mb-4 mt-5'
            >
              Login
            </button>
            {error && error}
          </form>
          <div className='flex justify-center items-center flex-col'>
            <p className='mb-5'>or signin with</p>
            <div className='flex gap-4 '>
              <FcGoogle className='text-3xl cursor-pointer' />
              <FaFacebookSquare className='text-3xl cursor-pointer text-[#3664f4]' />
              <FaLinkedin className='text-3xl cursor-pointer text-[#3664f4]' />
              <BsGithub className='text-3xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
