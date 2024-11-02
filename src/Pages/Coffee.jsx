import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffee = () => {
    const coffee=useLoaderData()
    return (
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 my-10'>
        {
            coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }

    </div>
    );
};

export default Coffee;