import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import upload from '../utils/upload'
import newRequest from '../utils/newRequests'

const Register = () => {
  const [file, setfile] = useState(null)
  const [user, setuser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setuser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = await upload(file)
    try {
      const res = await newRequest.post('/auth/register', { ...user, img: url })

      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='mx-auto'>
      <div className='flex  md:flex justify-center items-center h-screen grid-cols-2 max-w-[1240px] m-auto'>
        <div className=' flex flex-col  basis-2/4 shadow-md px-5 h-[65%] py-5  '>
          <h4 className='text-5xl font-bold text-center m-5'>Register</h4>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <input
              name='username'
              type='text'
              placeholder='Enter your username'
              className='my-4 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" '
              onChange={handleChange}
            />
            <input
              name='email'
              type='email'
              placeholder='Enter your email'
              className='my-4 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" '
              onChange={handleChange}
            />
            <input
              name='password'
              type='password'
              placeholder='Enter your password'
              className='my-4 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" '
              onChange={handleChange}
            />
            <input type='file' onChange={(e) => setfile(e.target.files[0])} />
            <button
              type='submit'
              className='bg-[#002c3e] text-[#FFC16E] px-8 py-3 mb-4 mt-5'
            >
              Register
            </button>
          </form>
          <div className='flex justify-center items-center flex-col sm:mb-[50px]'>
            <p className='mb-5'>or signup with</p>
            <div className='flex gap-4'>
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

export default Register
