import React from 'react'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
    <div className='flex items-center justify-center my-[100px]'>
      <div className='w-[1400px]'>
        <h1 className='text-center mb-10 text-6xl font-bold'>Latest News</h1>
        <p className='text-center mb-12 text-2xl my-10'>
          Catch up on the latest news and blogs, find out how we're driving
          innovation and change
        </p>
        <div className='gap-8 md:flex md:justify-between mt-20'>
          <div className='shadow-xl '>
            <img
              src='https://images.unsplash.com/photo-1509100194014-d49809396daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBmYXJtZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
              className='rounded-tr-[80px] object-cover '
            />
            <div className='p-4'>
              <h1 className='text-3xl font-bold my-4'>
                Empowering Women in Faming
              </h1>
              <p className='text-xl mb-4 font-light'>March 13, 2023</p>
              <p className='text-xl leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos aut, sit eveniet impedit aspernatur velit
                cum incidunt ea cumque!
              </p>
            </div>
          </div>
          <div className='shadow-xl '>
            <img
              src='https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              alt=''
              className='rounded-tr-[80px] object-cover'
            />
            <div className='p-4'>
              <h1 className='text-3xl font-bold my-4 '>
                Construction of Road for the community
              </h1>
              <p className='text-xl mb-4 font-light'>March 13, 2023</p>
              <p className='text-xl leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos aut, sit eveniet impedit aspernatur velit
                cum incidunt ea cumque!
              </p>
            </div>
          </div>
          <div className='shadow-xl '>
            <img
              src='https://media.istockphoto.com/id/1356056182/photo/man-pouring-himself-water.jpg?s=612x612&w=0&k=20&c=0vdCiJdbIacGxnGPIma1TL0NlOoEwiBiwuG8NXadXTU='
              alt=''
              className='rounded-tr-[80px] object-cover'
            />
            <div className='p-4'>
              <h1 className='text-3xl font-bold my-4'>
                Bivas Farm provide water for the Community
              </h1>
              <p className='text-xl mb-4 font-light'>March 13, 2023</p>
              <p className='text-xl leading-loose'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dignissimos aut, sit eveniet impedit aspernatur velit
                cum incidunt ea cumque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Link to='/news'>
            <button className='mt-20 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'>
              All News
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Latest
