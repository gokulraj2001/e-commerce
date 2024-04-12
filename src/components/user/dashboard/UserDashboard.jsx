// import React from 'react'
// // import '../../home/home/Home.css';
// import './UserDashboard.css'
// import UserNavbar from '../userNavbar/UserNavbar';
// import Categories from '../../home/categories/Categories';
// // import Slider from 'react-slick';
// import Shop from '../../home/shop/Shop';
// import Wrapper from '../../home/wrapper/Wrapper';
// import Footer from '../../home/footer/Footer';
// import Slider from '../../home/slider/Slider';


// const UserDashboard = ({addToCart, CartItem, shopItems}) => {
//   return (
//     <div>
//         <UserNavbar CartItem={CartItem}/>
//         <section className='home'>
//         <div className='container d_flex'>
//           <Categories />
//           <Slider />
//         </div>
//       </section>
//       <Shop shopItems={shopItems} addToCart={addToCart} />
//       <Wrapper/>
//       <Footer/>
//     </div>
//   )
// }

// export default UserDashboard


import React , {useState} from 'react'
// import Categories from '../categories/Categories'
import './UserDashboard.css';
// import Shop from '../shop/Shop';
// import Wrapper from '../wrapper/Wrapper';
// import Footer from '../footer/Footer';
// import SliderHome from '../slider/Slider';
import ShopMobilePhones from '../../home/shop/ShopMobilePhones';
import ShopPhoneAccessories from '../../home/shop/ShopPhoneAccessories';
import ShopSmartWatches from '../../home/shop/ShopSmartWatches';
import ShopEarphones from '../../home/shop/ShopEarphones';
import ShopBatteries from '../../home/shop/ShopBatteries';
import SliderHome from '../../home/slider/Slider';
import Categories from '../../home/categories/Categories';
import Wrapper from '../../home/wrapper/Wrapper';
import Footer from '../../home/footer/Footer';
import UserNavbar from '../userNavbar/UserNavbar';


// import ShopMobilePhones from "../shop/ShopMobilePhones";
// import ShopPhoneAccessories from "../shop/ShopPhoneAccessories";
// import ShopSmartWatches from "../shop/ShopSmartWatches";
// import ShopEarphones from "../shop/ShopEarphones";
// import ShopBatteries from "../shop/ShopBatteries";
// import UserNavbar from '../userNavbar/UserNavbar';

const Home = ({addToCart, CartItem, shopItems}) => {
  const [selectedCategory, setSelectedCategory] = useState("mobile-phones");

  const handleCategorySelect = (sectionId) => {
    setSelectedCategory(sectionId);
  };

  const renderShopComponent = () => {
    switch (selectedCategory) {
      case "mobile-phones":
        return <ShopMobilePhones shopItems={shopItems} addToCart={addToCart} />;
      case "phone-accessories":
        return <ShopPhoneAccessories shopItems={shopItems} addToCart={addToCart} />;
      case "smart-watches":
        return <ShopSmartWatches shopItems={shopItems} addToCart={addToCart}/>;
      case "earphones":
      return <ShopEarphones shopItems={shopItems} addToCart={addToCart}/>
      case "batteries":
      return <ShopBatteries shopItems={shopItems} addToCart={addToCart}/>
      default:
      return null;
    }
  };

  return (
    <div>
        <UserNavbar CartItem={CartItem}/>
        <section className='home'>
        <div className='container'>
          <SliderHome />
        </div>
      </section>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <Categories handleCategorySelect={handleCategorySelect} />
        </div>
        <div className="mobiles" style={{ flex: 2 }}>{renderShopComponent()}</div>
      </div>
      {/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
      <Wrapper/>
      <Footer/>
    </div>
  )
}

export default Home