import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import resume from '../asset/tj.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
const Next = () => {
  return (
    <div className='flex items-center justify-center mt-[50px] '>
      <div className='w-[1400px] grid sm:grid-cols-2'>
        <div className='flex-1 '>
          <h1 className='text-[#FFA500] text-5xl font-bold p-4'>
            We're a trusted partner
          </h1>
        </div>
        <div className='flex-1 p-4 '>
          <p className='text-2xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            facere natus omnis unde quibusdam veritatis dolores minus a iste
            voluptates?
          </p>
          <p className='text-2xl mt-2 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam
            architecto esse! Reprehenderit sed inventore accusamus ratione
            cumque iste, nobis, distinctio nam laboriosam ipsam quaerat nisi
            numquam commodi deleniti quidem, consequuntur tempore libero
            praesentium alias? Quia neque sapiente molestiae nemo.
          </p>

          <button className='mt-10 bg-black text-white p-4 text-xl font-bold hover:rounded-tl-[80px] hover:transition-all hover:duration-500'>
            <a href={resume} target='_blank' rel='noreferrer'>
              Download Our CV
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Next
