import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function FoodItem() {
  return (
    <div className='col-sm-12 col-md-5 col-lg-3 my-3'>
      <div className="card p-3 rounded">
        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Vegetarian-chilli-206c469.jpg?quality=90&webp=true&resize=375,341" alt="veg food item" className="card-img-top mx-auto" />
        {/* Cavolo nero orecchiette */}
        {/*  */}

        {/* heading and description */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-tittle">Easy vegetarian chilli</h5>
          <p className="fooditem_des">
          A comforting, flavorful, and nutritious dish made with a variety of vegetables (onions, bell peppers, carrots, garlic), canned beans (kidney, black, pinto), fire-roasted tomatoes, and aromatic spices (chili powder, cumin, oregano). It is a great option for a weeknight dinner or a crowd-pleasing meal, and can be served with a range of toppings, such as cheese, sour cream, and cilantro. (Approx. 157-321 calories per serving)
          </p>
          <p className="card-text">
          <LiaRupeeSignSolid /> 
          180
          <br />
          <button type='button' 
          id='cart_btn'
          className="btn btn-primary d-inline ml-4">
            Add to Cart
          </button>
          <p>Status: {" "}
            <span id='stock_status'
            className={10 > 5 ? "greenColor" : "redColor"}>
            {10 > 5 ? "In Stock" : "Out of Stock"}</span></p>
          
          </p>
        </div>
      </div>
    </div>
  )
}
