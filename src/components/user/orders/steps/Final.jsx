import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StepperContext } from '../context/StepperContext';
import { addOrder } from '../../../../api/OrderApi';

export default function Final({CartItem}) {
  const {userData, setUserData} = useContext(StepperContext);
  const navigateToUserDashboard=useNavigate('');
  const handleClick=(e)=>{
      e.preventDefault();
      console.log(userData)
      console.log(CartItem)


      {CartItem.map((item) => {
        let order={
          "name" : userData.name,
          "mobile": userData.mobileNo,
          "address": userData.address,
          "pincode": userData.pincode,
          "type": userData.addressType,
          "productName": item.name,
          "quantity": item.qty,
          "amount": item.price*item.qty,
          "imageUrl": item.imageUrl
        };
        addOrder({ order }).then((response) => {
          console.log("Order Successfull !!!");
          navigateToUserDashboard('/userdashboard');
          window.location.reload();
        }).catch((error) => {
          console.error(error);
          // alert('Something went wrong');
      });


  })}
  

};

  return (
    <div className=' md:mt-10'>
      <div className='flex flex-col items-center'>
      <div className='text-green-400'>
        <svg 
        className='w-24 h-24'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
          fillRule='evenodd'
          d="m10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 014-4z"
          clipRule="evenodd"

        />  

        </svg>
      </div>
      <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
        Congratulations!

      </div>
      <div className='text-lg font-semibold text-gray-500'>
        Your Order has been Successfully Placed.
        

      </div>
    <Link className='mt-10'>
        <button onClick={(e)=>{handleClick(e)}}  className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100'>
          Close
        </button>
      </Link>
      
    </div>
    </div>
  )
}
