import React from 'react'
import Flip from './Flip'
const Productser = () => {
  return (
    <div className='flex items-center justify-center mt-[50px] '>
      <div className='w-[1400px] '>
        <div>
          <h1 className='text-center mb-10 text-6xl font-bold px-10'>
            Our Products & Services
          </h1>
          <p className='text-center mb-12 text-2xl my-10 px-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            provident facere esse consequuntur optio, iusto reprehenderit nisi
            dolores culpa numquam sed officiis et quis dolor doloremque soluta
            harum! Suscipit, pariatur!
          </p>
          <Flip />
        </div>
      </div>
    </div>
  )
}

export default Productser
