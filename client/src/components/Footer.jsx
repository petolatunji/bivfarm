import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialGithub } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'
import { TiSocialFacebook } from 'react-icons/ti'
import { GiFarmTractor } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='flex items-center justify-center  p-4 border-t-8 border-[#FFA500] bg-slate-800 text-white '>
      <div className='w-[1400px] grid sm:grid-cols-4 mb-[50px]'>
        <div className='flex gap-2 items-center'>
          <Link to='/'>
            <GiFarmTractor className='text-[#FFA500] text-7xl cursor-pointer' />
          </Link>
          <h1 className='text-4xl font-bold'>Bivas Farm</h1>
        </div>
        <div className='mt-10 '>
          <h1 className='text-2xl font-bold'>Quick Links</h1>
          <div className='flex flex-col mt-3 text-xl gap-2'>
            <Link>Careers</Link>
            <Link>Contacts</Link>
            <Link>Investors</Link>
            <Link>About Us</Link>
            <Link>Locations</Link>
            <Link>Logout</Link>
          </div>
        </div>
        <div className='mt-10 '>
          <h1 className='text-2xl font-bold'>Products & Services</h1>
          <div className='flex flex-col mt-3 text-xl gap-2'>
            <Link>Rice</Link>
            <Link>Maize</Link>
            <Link>Milk</Link>
            <Link>Chickens</Link>
            <Link>Edible Oils</Link>
            <Link>Wood Products</Link>
          </div>
        </div>
        <div className='flex gap-6 cursor-pointer mt-10 text-3xl '>
          <TiSocialFacebook />
          <p>
            <a
              href='https://github.com/petolatunji'
              relative='path'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <SlSocialGithub />
            </a>
          </p>
          <p>
            <a
              href='https://www.linkedin.com/in/babatunde-olatunji-peter-1b5181119'
              relative='path'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <SlSocialLinkedin />
            </a>
          </p>
          <p>
            <a
              href='https://www.twitter.com/petolatunji'
              relative='path'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target='_blank'
              rel='noreferrer'
            >
              <SlSocialTwitter />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
