import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

import slider1 from '../../assets/art1.jpg'
import slider2 from '../../assets/art5.jpg'
import slider3 from '../../assets/art7.jpg'


const Slider = () => {
    return (
        <Swiper
            modules={[Parallax, Autoplay, Navigation, Pagination, Scrollbar]}
            spaceBetween={10}
            data-swiper-parallax="-23%"
            slot="container-start"
            parallax={true}
            speed={2000}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={'cube'}
            grabCursor={true}

        >
            <SwiperSlide>
                <div
                    className="mx-3 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider1})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-3xl lg:text-5xl' data-swiper-parallax="-100">Welcome to Art & Craft{"'"}s</h2>
                            <h2 className='font-semibold lg:text-xl py-1' data-swiper-parallax="-300">Creating unique vessels, sculptures, and tiles, ceramics and pottery blend artistry with craftsmanship, shaping clay into timeless expressions.</h2>
                        </div>
                        <div className='space-x-6'>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-bold bg-[#D2B48C] w-fit md:px-12'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-outline text-white btn-sm md:btn-md md:font-bold w-fit md:px-12'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="mx-2 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider2})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-3xl lg:text-5xl' data-swiper-parallax="-100">Welcome to Art & Craft{"'"}s</h2>
                            <h2 className='font-semibold lg:text-xl py-1' data-swiper-parallax="-300">Creating unique vessels, sculptures, and tiles, ceramics and pottery blend artistry with craftsmanship, shaping clay into timeless expressions.</h2>
                        </div>
                        <div className='space-x-6 '>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-bold bg-[#D2B48C] w-fit md:px-12'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-outline btn-sm md:btn-md md:font-bold w-fit md:px-12 text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="mx-2 md:mx-0 bg-no-repeat bg-center bg-cover h-dvh rounded-3xl text-white"
                    style={{
                        backgroundImage: `url(${slider3})`,
                        opacity: .8
                    }}
                >
                    <div className='md:w-5/6 h-full flex flex-col justify-center mx-auto md:space-y-5 px-10'
                    >
                        <div className='md:space-y-5 md:w-3/4 leading-7 '>
                            <h2 className='font-extrabold text-2xl md:text-3xl lg:text-5xl' data-swiper-parallax="-100">Welcome to Art & Craft{"'"}s</h2>
                            <h2 className='font-semibold lg:text-xl py-1' data-swiper-parallax="-300">Creating unique vessels, sculptures, and tiles, ceramics and pottery blend artistry with craftsmanship, shaping clay into timeless expressions.</h2>
                        </div>
                        <div className='space-x-6 '>
                            <button data-swiper-parallax="-500" className='btn btn-sm md:btn-md md:font-bold bg-[#D2B48C] w-fit md:px-12'>About Us</button>
                            <button data-swiper-parallax="-500" className='btn btn-outline btn-sm md:btn-md md:font-bold w-fit md:px-12 text-white'>Learn More</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;