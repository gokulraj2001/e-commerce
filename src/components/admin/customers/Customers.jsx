import React, { useEffect, useState } from "react";
import "./Customers.css"
import Sidebar from "../adminDashboard/components/Sidebar";
import { getAllCustomers } from "../../../api/UserApi";
const Customers =() =>{

    const [customers, setCustomers]= useState([])

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let orderArray=await getAllCustomers();
                setCustomers(orderArray)
                console.log(customers)
            } catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    return(
        <div className='grid-container1'>
        <Sidebar/>
        <div className="customers-container">
            <h2 className="customers-heading">Customers</h2>
            <table className="customers-table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map((customer,index) => (             
                <tr key={index}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>{customer.mobile}</td>
                    <td>{customer.dateJoined}</td>
                    
                </tr>
               
))}
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default Customers;