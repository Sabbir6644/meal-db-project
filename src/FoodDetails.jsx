import { useLoaderData, useNavigate } from "react-router-dom";


const FoodDetails = () => {
     const fooDetails = useLoaderData();
     const {meals}=fooDetails;
     const navigate = useNavigate();
     const handleBack=()=>{
          navigate(-1)
     }
     return (
          <div className="flex justify-center items-center">

                      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={meals[0].strMealThumb} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">ID: {meals[0].idMeal}</h2>
    <h2 className="card-title">Catagory: {meals[0].strCategory}</h2>
   
    </div>
    <h2 className="card-title">Country: {meals[0].strArea}</h2>
    <p>Instraction: {meals[0].strInstructions}</p>
    <div className="card-actions justify-center">
      <button onClick={handleBack} className="btn btn-primary">Back</button>
    </div>
  </div>
</div>  
          </div>
     );
};
  
export default FoodDetails;