import React from 'react'
import { BsChatLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Talk = () => {
  return (
    <div className='mt-[50px] p-2 justify-center items-center flex flex-col bg-slate-300'>
      <BsChatLeft className='text-[#FFA500] text-7xl mt-10' />
      <h1 className='font-bold text-6xl m-8'>Talk to Us</h1>
      <p className='text-2xl text-center md:w-[1400px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        repellat dolorum sit distinctio. Possimus reprehenderit odit tempore
        voluptate illum facere veniam sint natus rerum ad.
      </p>
      <Link to='/aboutus'>
        <button className='mt-10 mb-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px]'>
          Contact Us
        </button>
      </Link>
    </div>
  )
}

export default Talk
