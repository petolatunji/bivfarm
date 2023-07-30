import React from 'react'
import { GiFarmTractor } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import newRequest from '../utils/newRequests'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  const [active, setActive] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout')
      localStorage.setItem('currentUser', null)
      navigate('/')
    } catch (err) {}
  }

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className='w-[1400px] flex justify-between py-[20px] items-center  '>
        <div className='flex gap-2 items-center'>
          <Link to='/'>
            <GiFarmTractor className='text-black text-7xl cursor-pointer' />
          </Link>
          <h1 className='text-4xl font-bold'>Bivas Farm</h1>
        </div>
        <div className='hidden md:flex gap-[24px] font-medium items-center'>
          <Link to='/aboutus' className='text-[24px]'>
            About us
          </Link>
          <Link to='/products' className='text-[24px]'>
            Products Services
          </Link>
          <Link to='/contact' className='text-[24px]'>
            Contact Us
          </Link>
          <Link to='/news' className='text-[24px]'>
            News
          </Link>
          <Link to='/faqs' className='text-[24px]'>
            FAQS
          </Link>
          {!currentUser && (
            <Link to='/login' className='text-[24px]'>
              Login
            </Link>
          )}
          {!currentUser && (
            <Link to='/register' className='text-[24px]'>
              Register
            </Link>
          )}
          {currentUser && (
            <div
              className='flex items-center gap-[10px] cursor-pointer relative'
              onClick={() => setOpen(!open)}
            >
              <img
                src={
                  currentUser.img ||
                  'https://images.unsplash.com/photo-1676563554910-b7f41f2c7422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                }
                alt=''
                className='w-[32px] h-[32px] rounded-full object-cover '
              />
              <span className='cursor-pointer'>{currentUser?.username}</span>
              {open && (
                <div className='absolute top-[50px] right-0 p-[20px] bg-white  text-black border-2 border-white rounde-lg w-[100px] '>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? (
            <FaBars className='w-5' />
          ) : (
            <AiOutlineClose className='w-5' />
          )}
        </div>
      </div>
      <div
        className={
          !nav
            ? 'hidden'
            : 'absolute bg-[#FFA500] w-full px-8 flex flex-col top-20 '
        }
      >
        <Link
          to='/aboutus'
          onClick={handleClose}
          className='border-b-4 border-white w-full m-3'
        >
          About us
        </Link>
        <Link
          to='/products'
          onClick={handleClose}
          className='border-b-4 border-white w-full m-3'
        >
          Products & Services
        </Link>
        <Link
          to='/contact'
          onClick={handleClose}
          className='border-b-4 border-white w-full m-3'
        >
          Contact Us
        </Link>
        <Link
          to='/news'
          onClick={handleClose}
          className='border-b-4 border-white w-full m-3'
        >
          News
        </Link>
        <Link
          to='/faqs'
          onClick={handleClose}
          className='border-b-4 border-white w-full m-3'
        >
          FAQS
        </Link>

        {!currentUser && (
          <Link
            to='/login'
            onClick={handleClose}
            className='border-b-4 border-white w-full m-3'
          >
            Login
          </Link>
        )}
        {!currentUser && (
          <Link
            to='/register'
            onClick={handleClose}
            className='border-b-4 border-white w-full m-3'
          >
            Register
          </Link>
        )}
        {currentUser && (
          <div
            className='flex items-center gap-[10px] cursor-pointer relative'
            onClick={() => setOpen(!open)}
          >
            <img
              src={
                currentUser.img ||
                'https://images.unsplash.com/photo-1676563554910-b7f41f2c7422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              }
              alt=''
              className='w-[32px] h-[32px] rounded-full object-cover '
            />
            <span className='cursor-pointer'>{currentUser?.username}</span>
            {open && (
              <div className='absolute top-[50px] right-0 p-[20px] bg-white  text-black border-2 border-white rounde-lg w-[100px] '>
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
