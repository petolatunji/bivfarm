import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { data } from '../data'

const Careers = () => {
  const [click, setclick] = useState(false)
  const toggle = (index) => {
    if (click === index) {
      return setclick(null)
    }
    setclick(index)
  }

  return (
    <div className='mb-[50px] flex items-center justify-center  '>
      <div className='w-[1400px]   '>
        <h1 className='mt-[50px] mb-[30px] px-4 text-2xl font-bold'>
          Frequently Asked Questions
        </h1>
        {data.map((item, index) => {
          return (
            <div className='mt-[] p-4'>
              <div
                onClick={() => toggle(index)}
                key={index}
                className='flex items-center justify-between text-center cursor-pointer bg-slate-800 text-white border-b-4 border-[#FFA500] p-10'
              >
                <h1 className='text-2xl'>{item.question}</h1>
                <span>
                  {click === index ? (
                    <AiOutlineMinus className='text-2xl' />
                  ) : (
                    <AiOutlinePlus className='text-2xl' />
                  )}
                </span>
              </div>
              {click === index ? (
                <div className=' h-[100px] flex flex-col justify-center items-center p-4 mt-[20px]'>
                  <p className=''>{item.answer}</p>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Careers
