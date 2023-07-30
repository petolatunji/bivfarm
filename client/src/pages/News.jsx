import React from 'react'
import NewFeed from '../components/NewFeed'

const News = () => {
  return (
    <div>
      <div className=' p-2 justify-center items-center flex flex-col bg-slate-300 h-[30vh]'>
        <h1 className='font-bold text-4xl m-2'>Recent News</h1>
        <p className='text-2xl text-center md:w-[1400px]'>
          Happenings and other related information
        </p>
      </div>
      <NewFeed />
    </div>
  )
}

export default News
