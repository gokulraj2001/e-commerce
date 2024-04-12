import React, {useState} from "react"
import logo from "../../../../images/ecommerce icon.png"
import { Link, useNavigate } from "react-router-dom"
import "./CartNavbar.css" 

const CartNavbar = ({ CartItem, mobiles }) => {

    const navigateToHome=useNavigate();
    const navigateToUserDashboard=useNavigate();
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
      }

      const handleClick=()=>{
        const user=sessionStorage.getItem('user');
        {user!=null? navigateToUserDashboard('/userdashboard'): navigateToHome('/')}
      }

    // const[searchTerm,setSearchTerm]=useState("");

    // const filteredMobiles = mobile.filter((mobile) => 
    // mobile.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <a onClick={handleClick} style={{cursor: 'pointer'}}>
            <img src={logo} alt='' />
            </a>
          </div>

          <div className='f_flex'>
            <h2>Your Cart</h2>
          </div>

        <div className='icon f_flex width'>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle' ></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartNavbar
