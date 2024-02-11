import React, {useState, useEffect} from 'react';
import './trend.css';
import TrendCard from '../components/TrendCard';

// import Swiper JS
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {Autoplay, EffectCoverflow} from 'swiper/modules'


function Trend() {
    const [slides, setSlides] = useState([]);

    const fetchData = () => {
        fetch('/data/movieData.json')
        .then(res =>res.json())
        .then(data => {
          console.log('Data received:', data);
          setSlides(data);
        })
        .catch(e => console.error('Error:', e.message));
    };
      useEffect(()=> {
        fetchData();
      },[]);

  return (
    <section id="trend" className='trend'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Coming Soon</h4>
            </div>
            <div className="row">
            <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            spaceBetween={30}
            autoplay={{
                delay: 1900,
                disableOnInteraction: false,
            }}
            loop= {true}
            modules={[Autoplay]}
            className='trendSwiper'
            >
       {slides &&
       slides.length > 0 && 
       slides.map(slide => (
        <SwiperSlide key={slide._id}>
            <TrendCard slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Trend