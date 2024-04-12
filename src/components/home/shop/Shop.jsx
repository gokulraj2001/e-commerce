import React from "react"
import ShopCart from "./ShopCart"
import "./Shop.css"
import { Link } from "react-router-dom"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section id="mobile-phones"  className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left f_flex'>
                <div className="#">
                <h2>Smart Phones</h2>
                </div>
              </div>
              <div className='heading-right row '>
                <Link to='/mobilephones'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
                </Link>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>

      <section id="phone-accessories" className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
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
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>

      <section id="smart-watches" className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Smart Watches</h2>
              </div>
              <div className='heading-right row '>
              <Link to='/smartwatches'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </Link>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>

      <section id="earphones" className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Earphones</h2>
              </div>
              <div className='heading-right row '>
              <Link to='/earphones'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </Link>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>

      <section id="batteries" className='shop background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Batteries</h2>
              </div>
              <div className='heading-right row '>
                <Link to='/batteries'>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
                </Link>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
