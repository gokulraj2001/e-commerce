import React from "react"
import "./Cart.css"
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CartNavbar from "./cartNavbar/CartNavbar";
// import Razorpay from "razorpay"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {

    const navigateToLogin= useNavigate('');
    const navigateToOrder=useNavigate('');

    const navigateToHome=useNavigate();
    const navigateToUserDashboard=useNavigate();
  
  // const [paymentLoading, setPaymentLoading]= useState(false);
  
  const handleBuy=(e)=>{
    const user= sessionStorage.getItem('user');
    user? navigateToOrder('/order') : navigateToLogin('/usersignin')
  }

  const handleClick=()=>{
    const user=sessionStorage.getItem('user');
    {user!=null? navigateToUserDashboard('/userdashboard'): navigateToHome('/')}
  }
  
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
  // const handleBuy = async ()=>{

  //   const razorpay= new Razorpay ({
      // intialize razorpay
  //     key_id:"",
  //     key_secret:"s9aceZmZbovRncKUCy5lfcoD",
  //   });

  //      // Prepare order details
  //      const options = {
  //       amount: totalPrice * 100, // Razorpay amount is in paise (multiply by 100)
  //       currency: "INR", // Currency code
  //       receipt: "order_receipt", // Receipt ID
  //       payment_capture: 1, // Auto capture payment
  //     };
  
  //     // Create order
  //     const order = await razorpay.orders.create(options);
  
  //     // Open Razorpay checkout
  //     const paymentResponse = await razorpay.payment.create({
  //       order_id: order.id,
  //       notes: {
  //         merchant_order_id: "order_id_123", // Replace with your custom order ID
  //       },
  //     });
  
  //     // Handle payment response
  //     console.log(paymentResponse);
  //     // You can handle the payment response here, e.g., update cart, show confirmation, etc.
  //   };
  
  // product qty total
  return (
    <>
    <CartNavbar CartItem={CartItem}/>
      <section className='cart-items'>
        <div className='container d_flex'>
      

          <div className='cart-details'>
            {CartItem.length === 0 && <div className='no-items product text-center'>
              <h1 >No Items are add in Cart</h1><br/>
              <button onClick={handleClick} className="cart-btn btn btn-secondary">Continue Shopping</button>
              </div>
            
            }

      
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.imageUrl} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                    ₹{item.price}.00 * {item.qty}
                      <span>₹{productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        {/* <i className='fa-solid fa-xmark'></i> */}
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>₹{totalPrice}.00</h3>

              </div>
              <div className="text-center">
                {/* <Link to="/order"> */}
              <button
              className="btn-primary"
              onClick={(e)=>{handleBuy(e)}}
              // disabled={CartItem.length === 0 || paymentLoading}
            >
              {/* {paymentLoading ? "Processing..." : "Buy Now"} */}
              Buy 
            </button>
            {/* </Link> */}
            </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
};
        
export default Cart
