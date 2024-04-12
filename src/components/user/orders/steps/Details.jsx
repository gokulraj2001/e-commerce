import React, { useState } from 'react'
import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';;

export default function Details({CartItem}) {
  const {userData, setUserData} = useContext(StepperContext);

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);

   const handleChange = (e) => {
     const {name,value} =  e.target;
     setUserData({...userData, [name]:value});
   };

   const [cartItems, setCartItems]= useState([]);
   const addToCart = (item) =>{
    setCartItems([...cartItems,item]);
   }

  return (
    <>
    <div className="flex flex-col text-gray-500 mt-50 mb-50">

<div className='w-full mx-2 flex-1'>
  <h2 className='text-2xl font-bold underline'>Shipping info</h2>
  <div className="font-bold h-3 text-gray-500 text-lg leading-7 ">

    <div>
      <strong>NAME :</strong> {userData["name"] || ""}
    </div>
    <div>
      <strong>MOBILE NO :</strong> {userData["mobileNo"] || ""}
    </div>
    <div>
      <strong>ADDRESS :</strong> {userData["address"] || ""}
    </div>
    <div>
      <strong>PINCODE :</strong> {userData["pincode"] || ""}
    </div>
    <div>
      <strong>TYPE OF ADDRESS :</strong> {userData["addressType"] || ""}
    </div>
  </div>
</div>

<div className='w-full mx-2 flex-1 mt-4 '>
  <h2 className='text-2xl font-bold underline mt-40'>Cart Items</h2>
  <table className="table-auto border-collapse border border-gray-400 mt-3">
    <thead>
      <tr>
        <th className="border border-gray-400 px-4 py-2">Product Image</th>
        <th className="border border-gray-400 px-4 py-2">Product Name</th>
        <th className="border border-gray-400 px-4 py-2">Quantity</th>
        <th className="border border-gray-400 px-4 py-2">Price</th>
        <th className="border border-gray-400 px-4 py-2">Sub Total</th>
        {/* <th className="border border-gray-400 px-4 py-2">Total</th> */}

      </tr>
    </thead>
    <tbody>
      {/* Map through cart items here and render each row */}
      {CartItem.map((item, index) => (
        
        <tr key={index}>
          <td className="border border-gray-400 px-4 py-2">
            <img src={item.imageUrl} alt={item.name} height="80" width='80' />
          </td>
          <td className="border border-gray-400 px-4 py-2">{item.name}</td>
          <td className="border border-gray-400 px-4 py-2">{item.qty}</td>
          <td className="border border-gray-400 px-4 py-2">₹{item.price}.00</td>
          <td className="border border-gray-400 px-4 py-2">₹{item.price * item.qty}.00</td>
        </tr>
      ))}
    </tbody>
  </table>
  <br/>
  <div className='text-center'>
    <h3>Total : ₹{totalPrice}.00</h3>
  </div>
</div>
</div>
    </>

  );
};
