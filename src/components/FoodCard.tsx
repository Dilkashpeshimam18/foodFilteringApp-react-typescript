import React,{useState,useEffect} from 'react'
import FoodType from './FoodType'
import { Food } from '../model';
import {Data} from '../Data'

interface FoodCardType{
    foodItem: Food[],
    setFoodItem:React.Dispatch<React.SetStateAction<Food[]>>;
}

const FoodCard = ({foodItem,setFoodItem}: FoodCardType) => {
    const [searchFood, setSearchFood]= useState<string>('')
    const [selected,setSelected]=useState<boolean>(false)

    const menuItem = new Set<string>(foodItem.map((val)=>val.category))
    const category=Array.from(menuItem)

  

    //filter food by category
    const filterFood=(cat:string)=>{
        const newItem= foodItem.filter((newval)=>{
           return newval.category==cat
        })
        setFoodItem(newItem)
    }


   const filterByPrice=(event: React.FormEvent<HTMLSelectElement>)=>{
    event.preventDefault()
    const element = event.target as HTMLSelectElement;
    // setFoodItem(Data)

   var newItem= foodItem.filter((item)=>{
        if(element.value=='Food between 100-149rs'){
        
          return item.price>=100 && item.price<150
    }else if(element.value=='between 150-199rs' ){
        return  item.price>=150 && item.price<200
       
    }else if(element.value=='between 200-250rs'){
        return  item.price>=200 && item.price<250
    }
    
})


if(newItem.length !=0){
    var newVal=newItem

    setFoodItem(newVal)


}


 
}
 

    
  return (
    <div>
        <div style={{width:'800px', display:'flex', justifyContent:'center',marginLeft:'435px'}} className="input-group mb-4 d-flex align-items-center justify-content-center ">
  <input value={searchFood} onChange={(e)=>setSearchFood(e.target.value)}    type="text" className="form-control" placeholder="Enter your favourite food..." aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-success" type="button" id="button-addon2">Search </button>

  <select onChange={filterByPrice} className="form-select" aria-label="Default select example">
  <option value='Food between 100-149rs'>Food between 100-149rs</option>
  <option value='between 150-199rs'>between 150-199rs</option>
  <option value='between 200-250rs'>between 200-250rs</option>
</select>
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