import React , {useState} from 'react'
import Navbar from '../navbar/Navbar'
import Categories from '../categories/Categories'
import './Home.css';
import Shop from '../shop/Shop';
import Wrapper from '../wrapper/Wrapper';
import Footer from '../footer/Footer';
import SliderHome from '../slider/Slider';


import ShopMobilePhones from "../shop/ShopMobilePhones";
import ShopPhoneAccessories from "../shop/ShopPhoneAccessories";
import ShopSmartWatches from "../shop/ShopSmartWatches";
import ShopEarphones from "../shop/ShopEarphones";
import ShopBatteries from "../shop/ShopBatteries";

const Home = ({searchResult,addToCart, CartItem, shopItems}) => {
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
        <Navbar CartItem={CartItem}/>
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