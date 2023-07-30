import React from 'react'
import { Link } from 'react-router-dom'

const Firm = () => {
  return (
    <div className='flex items-center justify-center mt-[100px] p-4 '>
      <div className='w-[1400px] grid sm:grid-cols-2'>
        <div className='flex-1 '>
          <img
            src='https://media.istockphoto.com/id/1167961981/photo/gloves-smile-family-and-some-dirt.jpg?s=612x612&w=0&k=20&c=t9I-zg6Zvyub6gNJHXMCGQXcuxfqG0cYSU70Q9fcuRI='
            alt=''
            className='rounded-bl-[80px] rounded-tr-[80px] object-cover  '
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-5xl font-bold mb-5'>
            Firm Foundations for Sustainable Growth
          </h1>
          <p className='text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            dignissimos nobis in. A repellendus optio animi eos assumenda magnam
            cupiditate accusantium ex. Id, quisquam voluptate! Accusantium velit
            aliquam rerum sit cupiditate quos hic tempora cumque, eveniet sed
            eum error totam quibusdam ullam! Fuga quasi optio inventore delectus
            provident laudantium atque!
          </p>
          <Link to='/aboutus'>
            <button className='mt-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'>
              Find Out More About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Firm
