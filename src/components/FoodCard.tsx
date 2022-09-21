import React from 'react'
import './FoodCard.css'
import FoodType from './FoodType'
import { Food } from '../model';

interface FoodCardType{
    foodItem: Food[]
}
const FoodCard = ({foodItem}: FoodCardType) => {
  return (
    <div>
        <FoodType />

        <div className="container-fluid">
            <div className="row justify-content-center">
                {foodItem.map((item,index)=>{
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