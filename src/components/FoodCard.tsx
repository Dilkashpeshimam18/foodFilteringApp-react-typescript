import React,{useState} from 'react'
import FoodType from './FoodType'
import { Food } from '../model';

interface FoodCardType{
    foodItem: Food[],
    setFoodItem:React.Dispatch<React.SetStateAction<Food[]>>;
}

const FoodCard = ({foodItem,setFoodItem}: FoodCardType) => {
    const [searchFood, setSearchFood]= useState<string>('')

    const menuItem = new Set<string>(foodItem.map((val)=>val.category))
    const category=Array.from(menuItem)
    //filter food by category
    const filterFood=(cat:string)=>{
        const newItem= foodItem.filter((newval)=>{
           return newval.category==cat
        })
        setFoodItem(newItem)
    }


    //Search for food item


    
  return (
    <div>
        <div style={{width:'800px', display:'flex', justifyContent:'center',marginLeft:'435px'}} className="input-group mb-4 d-flex align-items-center justify-content-center ">
  <input value={searchFood} onChange={(e)=>setSearchFood(e.target.value)}    type="text" className="form-control" placeholder="Enter your favourite food..." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-success" type="button" id="button-addon2">Search food</button>
</div>
        <FoodType setFoodItem={setFoodItem} foodItem={foodItem} filterFood={filterFood} category={category} />

        <div className="container-fluid">
            <div className="row justify-content-center ">
                {foodItem.filter((data)=>{
                    if(searchFood==''){
                        return data
                    }else if(data.title.toLowerCase().includes(searchFood.toLowerCase())){
                        return data
                    }
                }).map((item,index)=>{
                    return(
                        <div
                        className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                        key={index}
                      >
                        <div className="card-img-top text-center">
                          <img src={item.img} alt={item.title} className="photo w-75" />
                        </div>
                        <div className="card-body">
                          <div className="card-title fw-bold fs-4">
                            {item.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                            {item.price}
                          </div>
                          <div className="card-text">{item.desc}</div>
                        </div>
                      </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default FoodCard