import React, { useEffect, useState } from "react";
import "./AdminOrders.css";
import Sidebar from "../adminDashboard/components/Sidebar";
import { getOrders, updateOrder } from "../../../api/OrderApi";

const AdminOrders = () =>{


    const [orders,setOrders]=useState([])
    const [status, setStatus]=useState();


    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let orderArray=await getOrders();
                setOrders(orderArray)
                console.log(orders)
            } catch(error){
                console.log(error)
            }
        }
    
        fetchData();
    },[])


    const updateStatus=(id, newStatus)=>{
        const updatedOrder={...orders.find(order=> order.id=== id), status: newStatus};

        setOrders((prevOrders)=>
            prevOrders.map((order)=>
                order.id===id? updatedOrder: order    
            )
        );

        updateOrder(updatedOrder).then((respone)=>{
            console.log("Order updated")
        }).catch((error)=>{
            console.log(error)
        })
    };

   
    return(
        <div className='grid-container'>
        <Sidebar/>
        <div className="admin-orders-container">
            <h2 className="admin-orders-heading">Admin Orders</h2>
            <table className="admin-orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Address Type</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Mode of Payment</th>
                        <th >Status</th>
                    </tr>
                </thead>
                <tbody>
                   
                {orders.map((order,index) => (             
                <tr key={index}>
                    {/* {console.log(order.id)} */}
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.userId}</td>
                    <td>{order.name}</td>
                    <td>{order.address}</td>
                    <td>{order.pincode}</td>
                    <td>{order.type}</td>
                    <td>{order.productName}</td>
                    <td>{order.quantity}</td>
                    <td>₹{order.amount}.00</td>
                    <td>Online</td>
                    {/* <td style={{width:"100px"}}>
                        <select name="status" id="status" value={status} onChange={(e)=>updateStatus(order.id, e.target.value)}> 
                            <option value="Order Placed">Order Placed</option> 
                            <option value="Shipping">Shipping</option> 
                            <option value="Out for Delivery">Out for Delivery</option> 
                            <option value="Delivered">Delivered</option> 
                        </select>
                    </td> */}

                    {order.status==="Delivered" &&(
                        <td className="text-success fw-bold">Delivered</td>
                    )}
                    {order.status==="Cancelled" &&(
                        <td title={order.reasonForCancellation} className="text-danger fw-bold">Cancelled</td>
                    )}
                    {order.status !== "Delivered" && order.status !== "Cancelled" && (
                        <td style={{width:"100px"}}>
                        <select name="status" id="status" value={status} onChange={(e)=>updateStatus(order.id, e.target.value)}> 
                            <option value="Order Placed">Order Placed</option> 
                            <option value="Shipping">Shipping</option> 
                            <option value="Out for Delivery">Out for Delivery</option> 
                            <option value="Delivered">Delivered</option> 
                        </select>
                    </td>
                    )}

                </tr>
               
))}
                    
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AdminOrders;