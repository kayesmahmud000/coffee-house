
const Card = ({coffee}) => {
    console.log(coffee)
    const {name,image,category,origin,type,rating,popularity}=coffee;
    return (
        <div className="card transition hover:scale-105 overflow-hidden bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full"
            src={image}
            alt={name} 
            />
        </figure>
        <div className="card-body font-bold">
          <h2 className="card-title">
           Name: {name}
          </h2>
          <p>Category: {category}</p> 
         
          <p> Type: {type}</p> 
         
          <p> Origin: {origin}</p> 
         
          <p> Rating: {rating}</p> 
          <p> Popularity: {popularity}</p> 
         
          
        </div>
      </div>
    );
};

export default Card;