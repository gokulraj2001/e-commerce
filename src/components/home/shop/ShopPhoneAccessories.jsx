import React from "react"
import ShopCart from "./ShopCart"
import "./Shop.css"
import { Link } from "react-router-dom"

const ShopPhoneAccessories = ({ addToCart, shopItems }) => {

    const mobileArray=shopItems.filter(obj=>obj.category==="accessories")
    const subArray=mobileArray.slice(0,3);
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left  f_flex'>
                <h2>Phone Accessories</h2>
              </div>
              <div className='heading-right row '>
                <Link to='/accessories'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
                </Link>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} subArray={subArray} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ShopPhoneAccessories
