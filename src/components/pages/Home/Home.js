import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import TopSpots from '../TopSpots/TopSpots';
import TouristGallery from '../TouristGallery/TouristGallery';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <TopSpots></TopSpots>
            <AboutUs></AboutUs>
            <TouristGallery></TouristGallery>
        </div>
    );
};

export default Home;