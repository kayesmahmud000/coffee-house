import toast from "react-hot-toast";

// gat data from localStores
const getStoredCoffee=()=>{
const allFavoriteCoffees=localStorage.getItem('favorite-coffees');
if(allFavoriteCoffees){
    const favorite=JSON.parse(allFavoriteCoffees)
    console.log(favorite)
    return favorite
}else{
    return []
}
}

// add data from localStores
const addFavoriteCoffee=(coffee)=>{
    const favoriteCoffee=getStoredCoffee();
    const isExist=favoriteCoffee.find(item=>item.id ===coffee.id);
    if(isExist){
        return toast.error('Already Exist')
    }
   else{
    favoriteCoffee.push(coffee)
    localStorage.setItem('favorite-coffees',JSON.stringify(favoriteCoffee) )
    toast.success('Successfully! Added')
   }
}

// remove from local Stores
const removeFavorite=(id)=>{
    const favoriteCoffee=getStoredCoffee();
    const remaining= favoriteCoffee.filter(coffee=>coffee.id !==id)
    localStorage.setItem('favorite-coffees',JSON.stringify(remaining) )
    toast.success('Successfully! removed')
}
export {addFavoriteCoffee ,getStoredCoffee,removeFavorite}