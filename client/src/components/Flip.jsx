import React from 'react'
import { GiChicken } from 'react-icons/gi'
import { FaPiggyBank } from 'react-icons/fa'
import { GiCirclingFish } from 'react-icons/gi'
import { GiFarmer } from 'react-icons/gi'
import { RiOilLine } from 'react-icons/ri'
import { GiWoodPile } from 'react-icons/gi'

const Flip = () => {
  return (
    <div className='mb-[100px] md:flex md:flex-wrap gap-16   '>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/576734328/photo/modern-chicken-farm-production-of-white-meat.jpg?s=612x612&w=0&k=20&c=Vmw-mGxYKUcWL9bQaWvKUObdztUFmf3iAp2zQNQEKPw='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Poultry
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiChicken className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Poultry</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/934276986/photo/young-healthy-pig-lenjoyed-summer-sunshine-at-farm.jpg?s=612x612&w=0&k=20&c=MYS0duQZk9QHJwb_NA5RRiFVKrkipXBFr2xr2APK8nM='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Piggery
            </h1>
          </div>
          <div className='flip-card-back'>
            <FaPiggyBank className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Piggery</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/1332383800/photo/tiger-catfish-close-up-the-catfish-lies-on-a-yellow-pebble-another-catfish-is-floating-in-the.jpg?s=612x612&w=0&k=20&c=qi6hPhz5j1jI0IDPjDuwqyGO3gGiSykVHyFYSPPEaCU='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Fishery
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiCirclingFish className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Fishery</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlhbSUyMHBsYW50YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[80px] relative text-2xl font-bold text-white'>
              Yam Plantation
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiFarmer className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Yam Plantation</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/1428296841/photo/young-woman-chooses-wine-in-a-supermarket-standing-in-the-alcohol-department-with-a-basket.jpg?s=612x612&w=0&k=20&c=3Wtn61ONLAqrzdEaZksl24gB4af06qJTc1mlrShd7gk='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[120px] relative text-2xl font-bold text-white'>
              Edible Oil
            </h1>
          </div>
          <div className='flip-card-back'>
            <RiOilLine className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Edible oil</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img
              src='https://media.istockphoto.com/id/915846944/photo/a-stack-of-wood-on-the-shelf-in-a-woodshop.jpg?s=612x612&w=0&k=20&c=yO2sJMZ9t6gwdlxgnYDBRkTTQlvd1QkLggtl3NRGqQI='
              alt='Avatar'
              className='w-[400px] h-[500px] object-cover rounded-tr-[80px] rounded-bl-[80px]'
            />
            <h1 className='bottom-[450px] right-[80px] relative text-2xl font-bold text-white'>
              Wood Products
            </h1>
          </div>
          <div className='flip-card-back'>
            <GiWoodPile className='text-white text-8xl mb-8 rounded-full border-white  border-4 p-2' />
            <h1 className='text-2xl font-bold'>Wood Products</h1>
            <p className='text-xl mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
              beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flip
