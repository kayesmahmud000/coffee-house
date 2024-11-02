import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading'
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories =useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Heading title={'Browse Coffee by Category'} subtitle={'Choose your desired coffee category to browse through specific Coffees that fit in our test'}></Heading>
           <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;