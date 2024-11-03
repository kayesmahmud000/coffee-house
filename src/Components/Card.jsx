import { Link, useLocation } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Card = ({ coffee, handleRemoveBtn}) => {
  const { pathname } = useLocation()
  const { name, image, category, origin, type, rating, id, popularity } = coffee;
  return (
    <div className="flex relative">
      <Link to={`/coffee/${id}`} className="card transition hover:scale-105 overflow-hidden bg-base-100 shadow-xl">
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
      </Link>

      {
        pathname === '/dashboard' && (
          <div onClick={()=> handleRemoveBtn(id)} className=" absolute bg-warning p-4 rounded-full cursor-pointer -top-5 -right-5">
            <IoTrashBin  size={20}/>
          </div>
        )
      }

    </div>
  );
};

export default Card;