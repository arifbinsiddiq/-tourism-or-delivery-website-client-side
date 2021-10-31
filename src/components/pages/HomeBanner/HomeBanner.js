import React from 'react';
import './HomeBanner.css';
import HomeCover from '../../../images/cover.jpg';

const HomeBanner = () => {
    return (
        <div className="home-cover">
            <img src={HomeCover} alt="" />
        </div>

    );
};

export default HomeBanner;