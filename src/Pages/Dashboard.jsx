import React, { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import { getStoredCoffee, removeFavorite } from '../Utilitis/favoriteDb';
import Card from '../Components/Card';

const Dashboard = () => {
    const [coffees ,setCoffees]=useState([]);
    useEffect(()=>{
        const favorite=getStoredCoffee();
        setCoffees(favorite)
    },[])
    const handleRemoveBtn=(id)=>{
        removeFavorite(id)
        const favorite=getStoredCoffee();
        setCoffees(favorite)
    }
    
    return (
        <div>
          <Heading title={"Welcome to DashBoard"} subtitle={"Manage coffees that you have previously added favorite. You can view or remove them from hare"}></Heading>

          <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    coffees.map(coffee => <Card handleRemoveBtn={handleRemoveBtn} key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
        </div>
    );
};

export default Dashboard;