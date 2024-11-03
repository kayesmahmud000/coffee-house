import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NutritionImg from "../assets/nutrition.png"
import { addFavoriteCoffee, getStoredCoffee } from "../Utilitis/favoriteDb";


const CoffeeDetails = () => {
    const allCoffee = useLoaderData();
    const { id } = useParams()
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite]=useState(false);
    useEffect(() => {
        const findCoffee = allCoffee.find((coffee) => coffee.id === parseInt(id))
        setCoffee(findCoffee)
       
        const favorite=getStoredCoffee();
        const isExist=favorite.find(item=>item.id ===coffee.id);
        if(isExist){
          setIsFavorite(true)
        }
        
    }, [allCoffee, id])

    const { name, image, description, making_process, ingredients, nutrition_info,  rating, popularity } = coffee;

const handleAddFavoriteBtn=(coffee)=>{
   
    addFavoriteCoffee(coffee)
   setIsFavorite(true) 
}

    return (
        <div className="my-10">
            <div >
                <h2 className=" text-2xl mb-7 md:text-4xl font-thin ">{description}</h2>
                <div className="w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-lg" >
                    <img className="w-full h-full" src={image} alt="" />
                </div>
            </div>
            <div className=" flex justify-between items-center my-6">
                <div>
                    <h2 className="text-3xl mb-3 font-thin"> {name}</h2>
                    <p>{popularity}</p>
                    <p>{rating}</p>
                </div>
                <div>
                    <button disabled={isFavorite} onClick={()=>handleAddFavoriteBtn(coffee)} className="btn btn-warning">Add Favorite</button>
                </div>
            </div>
            <div>
                <h2 className="text-3xl mb-3 font-thin">Making Process</h2>
                <p className="text-xl">{making_process}</p>
            </div>
            <div className="flex my-10 px-6 justify-between">
                <div>
                    {/* ingredients */}
                    <div>
                        <h2  className="text-3xl mb-3 font-thin">Ingredients</h2>
                        <ul>
                            {
                                ingredients && ingredients.map(i=><li  key={i}className=" list-disc font-semibold">{i}</li>)
                            }
                        </ul>
                    </div>
                    {/* nutrition_info */}
                    <div className="my-5">
                        <h2  className="text-3xl mb-3 font-thin">Nutrition Info</h2>
                        <ul>
                            {
                                nutrition_info && Object.keys(nutrition_info).map(n=><li key={nutrition_info[n]} className="list-disc font-semibold">{n}: {nutrition_info[n]}</li>)
                            }
                        </ul>
                    </div>
                </div>
                {/* img */}
                <div className="w-[500px]">
                    <img src={NutritionImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;