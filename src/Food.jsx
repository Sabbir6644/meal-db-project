import { Link } from "react-router-dom";

const Food = ({meal}) => {
     const {strMeal, strMealThumb, idMeal}= meal;
     return (
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={strMealThumb} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">{strMeal}</h2>
    <h2 className="card-title">Meal Id: {idMeal}</h2>
    </div>
    <div className="card-actions justify-center">
      <Link to={`/${idMeal}`}><button className="btn btn-primary">Order Now</button></Link>
    </div>
  </div>
</div>
     );
};

export default Food;