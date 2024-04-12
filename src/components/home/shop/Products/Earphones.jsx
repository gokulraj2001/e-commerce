import React from "react"
import '../Shop.css'
import { Link } from "react-router-dom"
import ShopCart from "../ShopCart"
import Navbar from "../../navbar/Navbar"

const Earphones = ({ CartItem, addToCart, shopItems }) => {

    const subArray=shopItems.filter(obj=>obj.category==="earphones")
    

  return (
    <>
    <Navbar CartItem={CartItem}/>
      <section className='shop'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className=' row  f_flex'>
                <h2 className="text-start">Earphones</h2>
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

export default Earphones
