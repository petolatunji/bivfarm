import React, { useState } from 'react'

const NewFeed = () => {
  const [showMore, setshowMore] = useState(false)

  return (
    <div className='flex items-center justify-center mt-[50px] '>
      <div className='w-[1400px] px-4  '>
        <div className='mt-[30px] md:flex md:flex-row-reverse'>
          <div className='flex-1'>
            <img
              src='https://media.istockphoto.com/id/158986743/photo/interior-of-chicken-farm-with-several-chickens.jpg?s=612x612&w=0&k=20&c=VHSAkyispR6y8Fy6VexdI4LhhkT5YVDZW7mCvOi5KDo='
              alt=''
              className='md:ml-8'
            />
          </div>
          <div className='flex-1 '>
            <h1 className='text-2xl font-bold'>Poultry Section</h1>
            <p className='text-xl leading-loose mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              dignissimos fuga. Sed alias impedit quasi quod facilis asperiores
              maiores cumque dicta nihil est? Odit porro fugiat aliquam ullam
              hic! Aliquid pariatur dolorum dolor ipsum ipsam alias unde, est
              accusamus cupiditate veritatis labore enim? Ad ipsa voluptates
              atque impedit omnis iste iure quis corrupti? Consequatur sapiente
              autem placeat eum, incidunt, necessitatibus nisi modi perspiciatis
              illo ad id, distinctio asperiores corporis mollitia provident eos
              quibusdam? Veniam sed maiores, suscipit aut beatae iste
              consequatur tenetur tempora nam perferendis cumque aspernatur
              esse, aperiam cum dolorum explicabo molestiae veritatis? Impedit
              dignissimos consequuntur adipisci distinctio nemo!
            </p>
            <button
              className='mt-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'
              onClick={() => setshowMore(!showMore)}
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
        <div className='mt-[80px] md:flex '>
          <div className='flex-1'>
            <img
              src='https://media.istockphoto.com/id/530799981/photo/grey-and-white-catfish-closup.jpg?s=612x612&w=0&k=20&c=UMPBwOTMBkb0p31RjoiCus791l97p95n0oQ2Q1sQVvw='
              alt=''
            />
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>Aqua Section</h1>
            <p className='text-xl leading-loose mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              dignissimos fuga. Sed alias impedit quasi quod facilis asperiores
              maiores cumque dicta nihil est? Odit porro fugiat aliquam ullam
              hic! Aliquid pariatur dolorum dolor ipsum ipsam alias unde, est
              accusamus cupiditate veritatis labore enim? Ad ipsa voluptates
              atque impedit omnis iste iure quis corrupti? Consequatur sapiente
              autem placeat eum, incidunt, necessitatibus nisi modi perspiciatis
              illo ad id, distinctio asperiores corporis mollitia provident eos
              quibusdam? Veniam sed maiores, suscipit aut beatae iste
              consequatur tenetur tempora nam perferendis cumque aspernatur
              esse, aperiam cum dolorum explicabo molestiae veritatis? Impedit
              dignissimos consequuntur adipisci distinctio nemo!
            </p>
            <button className='mt-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'>
              Show More
            </button>
          </div>
        </div>
        <div className='my-[80px] md:flex md:flex-row-reverse'>
          <div className='flex-1'>
            <img
              src='https://media.istockphoto.com/id/1456108487/photo/pig-farming.jpg?s=612x612&w=0&k=20&c=4xxrdXNE-9cd7Xl54lZgIZ42lIi1jUw6aawqGmNsdlQ='
              alt=''
              className='md:ml-8'
            />
          </div>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>Piggery Section</h1>
            <p className='text-xl leading-loose mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              dignissimos fuga. Sed alias impedit quasi quod facilis asperiores
              maiores cumque dicta nihil est? Odit porro fugiat aliquam ullam
              hic! Aliquid pariatur dolorum dolor ipsum ipsam alias unde, est
              accusamus cupiditate veritatis labore enim? Ad ipsa voluptates
              atque impedit omnis iste iure quis corrupti? Consequatur sapiente
              autem placeat eum, incidunt, necessitatibus nisi modi perspiciatis
              illo ad id, distinctio asperiores corporis mollitia provident eos
              quibusdam? Veniam sed maiores, suscipit aut beatae iste
              consequatur tenetur tempora nam perferendis cumque aspernatur
              esse, aperiam cum dolorum explicabo molestiae veritatis? Impedit
              dignissimos consequuntur adipisci distinctio nemo!
            </p>
            <button className='mt-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'>
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFeed
