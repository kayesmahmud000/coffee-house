import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Heading title={'Browse Coffee by Category'} subtitle={'Choose your desired coffee category to browse through specific Coffees that fit in our test'}></Heading>
            
        </div>
    );
};

export default Home;