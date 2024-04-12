import React, { useEffect, useState } from "react";
import "./MyOrders.css";
import UserNavbar from "../userNavbar/UserNavbar";
import { cancelOrder, getOrdersByUsername } from "../../../api/OrderApi";
import { useNavigate } from "react-router-dom";

const MyOrders = ({ CartItem }) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const navigateToUserDashboard= useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderArray = await getOrdersByUsername();
                setOrders(orderArray);
                console.log(orders);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData(); 
    }, []);

    const handleCancel = (orderId) => {
        const reason = window.prompt("Enter reason for cancel:");
        if (reason) {
            console.log("Cancel reason for order ID:", orderId, ":", reason);
           const order={
            "id": orderId,
            "reasonForCancellation": reason,
            "status": "Cancelled"
           }

           cancelOrder({order}).then((reponse)=>{
            console.log("Order Cancelled");
            alert("Order Cancelled")
            window.location.reload();
           }).catch((error)=>{
            console.log(error)
           })
            
        }
    }

    return (
        <div>
            <UserNavbar CartItem={CartItem} />
            <br />
            {/* <div className="my-orders-containers" style={{ textAlign: 'center' }}>
                <h2 className="orders-heading">My Orders</h2>
                <table className="orders-table" style={{ margin: 'auto' }}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Pincode</th>
                            <th>Address Type</th>
                            <th>Price</th>
                            <th>Mode of Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.address}</td>
                                <td>{order.pincode}</td>
                                <td>{order.type}</td>
                                <td>₹{order.amount}.00</td>
                                <td>Online</td>
                                
                                {order.status==="Delivered" &&(
                                    <td className="text-success fw-bold">Delivered</td>
                                )}
                                {order.status==="Cancelled" &&(
                                    <td title={order.reasonForCancellation} className="text-danger fw-bold">Cancelled</td>
                                )}
                                 {order.status !== "Delivered" && order.status !== "Cancelled" && (
                                    <td>{order.status}</td>
                                 )}

                                <td>
                                    {(order.status !== 'Delivered' && order.status!== 'Cancelled')  ?
                                        <button onClick={() => handleCancel(order.id)} className="btn btn-danger">Cancel</button>: " "}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

        {/* {orders !=null? */}
            <div className="orders-container">
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <div className="order-details">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Product Name:</strong> {order.productName}</p>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Pincode:</strong> {order.pincode}</p>
            <p><strong>Address Type:</strong> {order.type}</p>
            <p><strong>Payment Mode:</strong> Online</p>
            {/* <p><strong>Status:</strong> {order.status}</p> */}
            {order.status==="Delivered" &&(
                                    <td className="text-success fw-bold">Delivered</td>
                                )}
                                {order.status==="Cancelled" &&(
                                    <td title={order.reasonForCancellation} className="text-danger fw-bold">Cancelled</td>
                                )}
                                 {order.status !== "Delivered" && order.status !== "Cancelled" && (
                                    <td className="fw-bold text-primary">{order.status}</td>
                                 )}
            <div><br/>
            {/* <button className="cancel-button">Cancel</button> */}
            {(order.status !== 'Delivered' && order.status!== 'Cancelled')  ?
                                        <button onClick={() => handleCancel(order.id)} className="btn btn-danger">Cancel</button>: " "}
          </div>
          </div>
          <div className="order-image">
            <img src={order.imageUrl} alt={order.productName} />
            <div className="quantity-price">
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Price:</strong> ₹{order.amount}.00</p>
            </div>
          </div>
        </div>
      ))}
    </div> 
    </div>
        // </div>
    )
}

export default MyOrders;


