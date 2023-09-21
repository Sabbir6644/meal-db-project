import { useLoaderData } from "react-router-dom";
import Food from "./Food";


const Foods = () => {
     const {meals} = useLoaderData();
     // console.log(meals);
     return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {
               meals.map((meal,index)=><Food key={index} meal={meal}></Food>)
              } 
          </div>
     );
};

export default Foods;