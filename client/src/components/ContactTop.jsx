import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const ContactTop = () => {
  return (
    <div className='flex  mb-12'>
      <div className='flex flex-col items-center justify-center  mb-12'>
        <div className='text-white text-center relative max-w-[100vW]'>
          <img
            src='https://images.unsplash.com/photo-1603814744509-57b74d605fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnN0cnVjdGlvbiUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='object-cover w-[100vw] h-[50vh] '
          />

          <div className='absolute top-2 left-4 '>
            <div className='flex gap-2 items-center justify-center'>
              <Link
                to='/'
                style={{
                  textDecoration: 'none',
                  color: '#ffd700',
                  fontSize: '24px',
                }}
              >
                Home
              </Link>
              <BsFillArrowRightCircleFill className='text-base' />
              <h1 className='text-base'>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTop
