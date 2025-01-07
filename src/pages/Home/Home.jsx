import React from 'react';
import Slider from '../../components/HomeDesign/Slider';
import LatestVisas from '../../components/HomeDesign/LatestVisas';
import AboutUs from '../../components/HomeDesign/AboutUs';
import FAQ from '../../components/HomeDesign/FAQ';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <LatestVisas></LatestVisas>
            <AboutUs></AboutUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;