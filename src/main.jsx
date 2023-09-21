import * as React from "react";
import { children } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Catagory from "./Catagory";
import Foods from "./Foods";
import FoodDetails from "./FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    loader: ()=> fetch('https://themealdb.com/api/json/v1/1/categories.php'),
    element: <Catagory></Catagory>,
    children: [
     
     {
       path: "/",
       element: <Home></Home>,
     },
     {
       path: "/catagory/:strCategory",
       loader: ({params})=> fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
       
       element: <Foods></Foods>,
     },
     {
       path: "/:idMeal",
       loader: ({params})=>fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
       element: <FoodDetails></FoodDetails>,
     },
 ]
},
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);