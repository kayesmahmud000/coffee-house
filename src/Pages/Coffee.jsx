import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Coffee = () => {
    const coffee = useLoaderData();
    const [coffees ,setCoffees]=useState(coffee);
  const  handleSortBtn=(shotBy)=>{
    if(shotBy==='popularity'){
      const  shorted=[...coffee].sort((a,b)=>b.popularity-a.popularity)
        setCoffees(shorted)
    }else if(shotBy==='rating'){
        const  shorted=[...coffee].sort((a,b)=>b.rating-a.rating)
        setCoffees(shorted)
    }

    }

    return (
        <>
        <div className='lg:flex  justify-between items-center my-16'>
            <div>
                <h1 className=' text-3xl lg:text-4xl font-thin'>Short Coffee&apos;s by popularity & rating-&gt;</h1>

            </div>
            <div  >
                <button onClick={()=>handleSortBtn('popularity')} className=' text-xl font-semibold btn btn-warning mb-5 lg:mr-4'>Short by Popularity </button>
                <button onClick={()=>handleSortBtn('rating')} className=' text-xl font-semibold btn btn-warning'>Short by Rating</button>
            </div>
        </div>
            <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>

        </>
    );
};

export default Coffee;