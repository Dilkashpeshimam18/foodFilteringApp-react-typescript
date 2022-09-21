import React from 'react'
import { Food } from '../model';
import {Data} from '../Data'


interface FoodButtonType{
    category:string[],
    filterFood:(cat:string)=>void,
    foodItem: Food[],
    setFoodItem:React.Dispatch<React.SetStateAction<Food[]>>;
}


const FoodType = ({category,filterFood,foodItem,setFoodItem}:FoodButtonType) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {category?.map((Val, id) => {
          return (
            <button
              className="btn-success text-white p-1 px-2 mx-5 btn fw-bold"
              key={id}
              onClick={()=>filterFood(Val)}
            >
              {Val}
            </button>
          );
        })}
      <button
          className="btn-success text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setFoodItem(Data)}
        >
          All
        </button> 
      
       </div>
    </>  )
}

export default FoodType