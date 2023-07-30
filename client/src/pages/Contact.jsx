import React from 'react'
import ContactTop from '../components/ContactTop'
import { GrMail } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='flex items-center justify-center mt-[10px] p-4'>
      <div className='w-[1400px]'>
        <ContactTop />
        <div className=' md:flex md:justify-between mb-[50px]'>
          <div className='p-4'>
            <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
            <p className='text-xl'>
              You can reach us throught telephone lines, Facebook, Twitter,
              Email address
            </p>
            <div className=''>
              <div className='flex items-center mb-4 mt-4'>
                <GrMail className='text-4xl' />
                <p className='ml-4 text-xl hover:text-[#FFA500] hover:underline'>
                  peterolatunji1@gmail.com
                </p>
              </div>
              <div className='flex items-center mb-4 mt-4'>
                <FiPhoneCall className='text-4xl' />
                <p className='ml-4 text-xl hover:text-[#FFA500] hover:underline'>
                  +2348132163481
                </p>
              </div>

              <div className='flex items-center'>
                <BsTwitter className='text-4xl' />
                <p className='ml-4 text-xl hover:text-[#FFA500] hover:underline'>
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
                    @petolatunji
                  </a>
                </p>
              </div>
              <div className='flex items-center'>
                <FaLinkedin className='text-4xl' />
                <p className='ml-4 mb-4 mt-4 text-xl hover:text-[#FFA500] hover:underline'>
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
                    Babatunde Olatunji Peter
                  </a>
                </p>
              </div>
              <div className='flex items-center '>
                <AiOutlineGithub className='text-4xl' />
                <p className='ml-4 text-xl hover:text-[#FFA500] hover:underline'>
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
                    petolatunji
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='shadow-xl p-4 w-[400px]'>
              <h1 className='text-xl font my-4 font-bold'>
                BIVAS Headquarters
              </h1>
              <p>Along Airport Road,</p>
              <p>Ilorin,</p>
              <p>Kwara State,</p>
              <p>Nigeria.</p>
            </div>
            <div className='shadow-xl p-4 w-[400px] mt-[40px] '>
              <h1 className='text-xl font my- font-bold'>Branch Address</h1>
              <p>Along Landmark University Road,</p>
              <p>Omu-Aran </p>
              <p>Kwara State</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>

        <div className=''>
          <iframe
            class='gmap_iframe'
            width='100%'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
            height='500px'
            src='https://maps.google.com/maps?width=1400&amp;height=1400&amp;hl=en&amp;q=ibrahim taiwo road ilorin&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
