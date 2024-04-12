import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import UserNavbar from '../userNavbar/UserNavbar'
import ShopCart from '../../home/shop/ShopCart';

const UserSearch = ({ CartItem, addToCart, shopItems}) => {

  const params= useParams();
  const searchQuery= params.searchQuery;
  console.log(searchQuery);

  const subArray= shopItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(subArray);



  return (
    <div>
         <UserNavbar CartItem={CartItem}  shopItems={shopItems}/>

       <section className='shop'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='  f_flex'>
                <h2>Search Results for '{searchQuery}'</h2>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} subArray={subArray} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserSearch

