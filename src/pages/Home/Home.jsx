import React from 'react';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import WhyVolunteer from './WhyVolunteer';
import SuccessStories from './SuccessStories';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div>
            <Banner/>
            <VolunteerNeedsNow/>
            <WhyVolunteer/>
            <SuccessStories/>

        </div>
    );
};

export default Home;