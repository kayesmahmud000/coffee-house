import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {
    const navigate = useNavigate()
    const coffees = useLoaderData()
    const { category } = useParams()
    const [coffeess, setCoffeess] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...coffees].filter(coffee => coffee.category === category);
            setCoffeess(filteredByCategory);
        } else {
            setCoffeess(coffees.slice(0, 6))
        }
    }, [coffees, category])

    return (
        <>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    coffeess.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }

            </div>
            
            <button className='btn btn-warning' onClick={()=>navigate('/coffee')}>View All</button>
            
            </>

    );
};

export default CoffeeCard;