import React from 'react'

import { GiFactory } from 'react-icons/gi'
import { GrGroup } from 'react-icons/gr'
import { FaGlobeAfrica } from 'react-icons/fa'

const Globe = () => {
  return (
    <div className='flex items-center justify-center mt-[50px] p-4 bg-[#FAF3E1]'>
      <div className='w-[1400px] md:flex justify-between mb-20'>
        <div className='flex gap-4 items-center mt-8 md:flex md:flex-col items-center '>
          <GiFactory className='text-8xl text-[#FFA500] ' />
          <div className='items-center '>
            <h1 className=' text-6xl font-bold mt-4 md:text-center'>20+</h1>
            <p className='text-2xl font-bold md:text-center'>
              Farms and Poultries
            </p>
          </div>
        </div>
        <div className='flex gap-4 items-center mt-8 md:flex md:flex-col items-center'>
          <FaGlobeAfrica className='text-8xl text-[#FFA500]' />
          <div className='items-center'>
            <h1 className=' text-6xl font-bold mt-4 text-center'>10+</h1>
            <p className='text-2xl font-bold text-center'>Countries</p>
          </div>
        </div>
        <div className='flex gap-4 items-center mt-8 md:flex md:flex-col items-center'>
          <GrGroup className='text-8xl text-[#FFA500]' />
          <div className='items-center'>
            <h1 className=' text-6xl font-bold mt-4 text-center'>5K+</h1>
            <p className='text-2xl font-bold text-center'>Employees</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Globe
