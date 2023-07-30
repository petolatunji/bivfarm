import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { imageData } from '../ImageData'

const TopHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div>
      <div>
        <div className='flex relative'>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={'true'}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            style={{
              '--swiper-navigation-color': '#FFA500',
              '--swiper-pagination-color': '#FFA500',
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay, FreeMode, Thumbs]}
          >
            {imageData.map((item) => {
              return (
                <SwiperSlide>
                  <div>
                    <div className='relative items-center text-black mb-12'>
                      <img
                        src={item.icon}
                        alt=''
                        className='w-screen h-screen object-cover'
                      />
                    </div>

                    <div className='absolute top-[8px] left-[16px] mt-[200px] pl-[100px]'>
                      <h1 className='text-[30px] mb-3 md:text-[70px] md:w-[700px]'>
                        {item.desc}
                      </h1>
                      <Link
                        to='/aboutus'
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <button className='bg-black cursor-pointer p-5 text-white text-2xl border-none mt-3'>
                          {item.btn}
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TopHome
