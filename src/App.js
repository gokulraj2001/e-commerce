import logo from './logo.svg';
import './App.css';
import { getMobiles } from './api/ProductsApi';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home/Home';
import { useEffect, useState } from 'react';
import UserSignin from './components/home/userAuth/signin/UserSignin';
import UserSignup from './components/home/userAuth/signup/UserSignup';
import UserDashboard from './components/user/dashboard/UserDashboard';
import Cart from './components/home/cart/Cart';
import Profile from './components/user/profile/Profile';
import EditProfile from './components/user/profile/editProfile/EditProfile';
import ChangePassword from './components/user/profile/editProfile/ChangePassword';
import AdminDashboard from './components/admin/adminDashboard/AdminDashboard';
import AdminSignin from './components/admin/adminAuth/AdminSignin';
import AdminOrders from './components/admin/orders/AdminOrders';
import Order from './components/user/orders/Order';
import MyOrders from './components/user/myOrders/MyOrders';
import AllProducts from './components/admin/products/AllProducts';
import { getAllProducts } from './api/UserProductsApi';
import Mobiles from './components/home/shop/Products/Mobiles';
import Batteries from './components/home/shop/Products/Batteries';
import Earphones from './components/home/shop/Products/Earphones';
import PhoneAccessories from './components/home/shop/Products/PhoneAccessories';
import SmartWatches from './components/home/shop/Products/SmartWatches';
import ForgotPasswordForm from './components/home/userAuth/forgotPassword/ForgotPasswordForm';
import Customers from './components/admin/customers/Customers';
import Search from './components/home/search/Search';
import AddProduct from './components/admin/products/addProduct/AddProduct';
import EditProducts from './components/admin/products/editProducts/EditProducts';
import UserSearch from './components/user/search/UserSearch';

function App() {

  const [shopItems, setShopItems]= useState([])


//   useEffect(() => {
//     //Runs on every render
//     getMobiles().then((response)=>{
//           setShopItems(response);
//   });
// },[])

useEffect(()=>{
  const fetchData= async()=>{
      try{
          let productsArray=await getAllProducts();
          setShopItems(productsArray)
          console.log(shopItems)
      } catch(error){
          console.log(error)
      }
  }
  fetchData();
},[])

  // const { productItems } = Data
  // const { shopItems } = Sdata


  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
  
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
   
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {
   
    const productExit = CartItem.find((item) => item.id === product.id)

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
     
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <div >
      <Routes>
        
        <Route path="/" element={<Home addToCart={addToCart} shopItems={shopItems} CartItem={CartItem}/>}/>
        <Route path='/cart' exact element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>
        <Route path="/usersignin" element={<UserSignin  CartItem={CartItem} />}/>
        <Route path="/usersignup" element={<UserSignup />}/>
        <Route path="/userdashboard" element={<UserDashboard addToCart={addToCart} shopItems={shopItems} CartItem={CartItem}/>}/>
        <Route path="/profile" element={<Profile CartItem={CartItem}/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/forgot" element={<ForgotPasswordForm/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/order" element={<Order CartItem={CartItem}/>}/>
        <Route path="/myorders" element={<MyOrders CartItem={CartItem}/>}/>
        <Route path="/search/:searchQuery" element={<Search CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path="/userdashboard/search/:searchQuery" element={<UserSearch CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>

        <Route path="/mobilephones" element={<Mobiles CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path="/batteries" element={<Batteries CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path="/earphones" element={<Earphones CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path="/accessories" element={<PhoneAccessories CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>
        <Route path="/smartwatches" element={<SmartWatches CartItem={CartItem} addToCart={addToCart} shopItems={shopItems}/>}/>


        <Route path="/adminsignin" element={<AdminSignin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/admin/products" element={<AllProducts/>}/>
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/addproduct" element={<AddProduct/>}/>
        <Route path="/admin/products/edit/:productId" element={<EditProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
