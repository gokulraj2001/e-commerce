import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './UserNavbar.css'
import logo from "../../../images/ecommerce icon.png"
const UserNavbar = ({CartItem}) => {

    const navigateToHome=useNavigate();

  const user= sessionStorage.getItem('user')

  const navigateToUserSearch=useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); 

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = ()=>{
      setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout=(e)=>{
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('auth');
          navigateToHome("/");
          window.location.reload();
          
        }


        const handleSearch = () => {   
          navigateToUserSearch(`/userdashboard/search/${searchQuery}`)
        };
      
        // Function to handle input change
        const handleInputChange = (e) => {
          setSearchQuery(e.target.value); 
        };
      
        // Function to handle Enter key press
        const handleKeyPress = (e) => {
          if (e.key === "Enter") {
            handleSearch(); 
          }
        };


  return (
    <div>
        <section className='usersearch'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to='/userdashboard'>
            <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-bar f_flex'>
            <i className='fa fa-search'></i>
            <input
              type="text"
              placeholder="Search and hit enter..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <span  onClick={handleSearch} style={{cursor:'pointer'}}>Search</span>
            
          </div>
          
          
        <div className='icon f_flex width'>
        <div className='username'>
        <Link to='/profile' ><p>Hello {user} !</p></Link>
        </div>
          <div className="dropdown">
            <i className="fa fa-user icon-circle p-0 m-0" style={{cursor: "pointer"}} id="dropdownMenuButton" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' 
            onClick={toggleDropdown}>
            </i>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : '' }`}  aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to='/myorders'><strong>My Orders</strong></Link>
              <Link className="dropdown-item" to='/profile'><strong>My Profile</strong></Link>
              <Link className="dropdown-item" to='/' onClick={(e)=>{handleLogout(e)}}><strong>Log out</strong></Link>
                   
            </div>
          </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserNavbar