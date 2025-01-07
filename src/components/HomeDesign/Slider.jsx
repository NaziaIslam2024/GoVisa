import React from 'react';
import SliderFancy from '../Fancy/SliderFancy';
import s1 from '../../assets/s1.jpeg';
import s2 from '../../assets/s2.webp';
import s3 from '../../assets/s3.jpeg';

const Slider = () => {
    return (
        <div className="carousel w-full max-h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='absolute right-1/3 left-1/3 top-[100px]'>
                    <SliderFancy></SliderFancy>
                </div>
                <img
                    src={s1}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='absolute right-1/3 left-1/3 top-[100px]'>
                    <SliderFancy></SliderFancy>
                </div>
                <img
                    src={s2}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={s3}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Slider;