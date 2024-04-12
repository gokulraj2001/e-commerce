import React, { useEffect, useState } from 'react'
import '../AdminDashboard.css'
import { BsCart3, BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill, BsFillBellFill } from 'react-icons/bs'
import { getTotalOrders, getTotalOrdersCancelled, getTotalOrdersDelivered } from '../../../../api/OrderApi';
import { getProductsCount } from '../../../../api/ProductsApi';
import { getUsersCount } from '../../../../api/UserApi';
import { Link } from 'react-router-dom';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { LineChart, Line } from 'recharts';

function Home() {

  const[totalProducts, setTotalProducts]= useState(0);
  const[totalCustomers, setTotalCustomers]= useState(0);
  const[totalOrders, setTotalOrders]= useState(0);
  const[ordersDelivered, setOrdersDelivered]= useState(0);
  const[ordersCancelled, setOrdersCancelled]= useState(0);

    useEffect(()=>{
      getTotalOrders().then((response)=>{
        setTotalOrders(response);
        console.log(totalOrders);
      })

      getTotalOrdersDelivered().then((response)=>{
        setOrdersDelivered(response);
        console.log(ordersDelivered);
      })

      getTotalOrdersCancelled().then((response)=>{
        setOrdersCancelled(response);
        console.log(ordersCancelled);
      })

      getProductsCount().then((response)=>{
        setTotalProducts(response);
        console.log("total products: " + totalProducts);
      })

      getUsersCount().then((response)=>{
        setTotalCustomers(response);
        console.log("total customers: "+ totalCustomers);
      })
    },[])
  

  return (
    <main className='main-container'>
      
      <h1 className='text-center' style={{color: 'green'}}>ADMIN TOOLS</h1>
      <div className='main-cards mt-5'>
      <Link to="/admin/products">
        <div className='card'>
          
        <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon'/>
        </div>
        <h1>{totalProducts}</h1>
        
        </div>
        </Link>
        
        
        <div className='card'>
        <div className='card-inner'>
            <h3>CATEGORIES  </h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
        </div>
        <h1>5</h1>
        </div>

        <Link to="/admin/customers">
        <div className='card'>
        <div className='card-inner'>
            <h3>CUSTOMERS </h3>
            <BsPeopleFill className='card_icon'/>
        </div>
        <h1>{totalCustomers}</h1>
        </div>
    </Link>


    <Link to="/admin/orders">
        <div className='card'>
        <div className='card-inner'>
            <h3>ORDERS</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>{totalOrders}</h1>
        </div>
        </Link>

        <div className='card'>
        <div className='card-inner'>
            <h3>ORDERS DELIVERED</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>{ordersDelivered}</h1>
        </div>

        <div className='card'>
        <div className='card-inner'>
            <h3>ORDERS REMAINING</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>{totalOrders-ordersDelivered-ordersCancelled}</h1>
        </div>

        <div className='card'>
        <div className='card-inner'>
            <h3>ORDERS CANCELLED</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>{ordersCancelled}</h1>
        </div>

      </div>
      {/* <div className='charts'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    
    
      </div> */}
    </main>
  )
}

export default Home
