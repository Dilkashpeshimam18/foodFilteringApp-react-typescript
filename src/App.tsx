import React, {useState,useEffect} from 'react';
import './App.css';
import FoodCard from './components/FoodCard';
import { Food } from './model';
import {Data} from './Data'

function App() {
  const [foodItem,setFoodItem] = useState<Food[]>(Data)

  return (
    <div className="App">
     <h1 style={{margin:'15px',marginBottom:'20px'}}>Food Filtering</h1>
     <FoodCard setFoodItem={setFoodItem} foodItem={foodItem}/>
    </div>
  );
}

export default App;
