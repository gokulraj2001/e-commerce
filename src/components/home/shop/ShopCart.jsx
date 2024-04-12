

import React, { useState } from "react"

const ShopCart = ({ subArray, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {/* {shopItems.map((shopItems, index) => {
        return (
            
            <div className="container">
          <div key={shopItems.id} className='box '>
            <div className='product mtop'>
              <div className='img' style={{width:"200px", height:"200px"}}>
                <img src={shopItems.imageUrl} alt='' />
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>₹{shopItems.price}.00 </h4>
  
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        )
      })} */}


{subArray.map((subArray, index) => {
        return (
            
            <div className="container">
          <div key={subArray.id} className='box '>
            <div className='product mtop'>
              <div className='img' style={{width:"200px", height:"200px"}}>
                <img src={subArray.imageUrl} alt='' />
              </div>
              <div className='product-details'>
                <h3>{subArray.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>₹{subArray.price}.00 </h4>
  
                  <button onClick={() => addToCart(subArray)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        )
      })}


    </>
  )
}

export default ShopCart
