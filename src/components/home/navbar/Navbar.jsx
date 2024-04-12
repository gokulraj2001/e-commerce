import React, { useState } from "react";
import logo from "../../../images/ecommerce icon.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import { searchProducts } from "../../../api/SearchApi"; 

const Navbar = ({ CartItem }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigateToSearch=useNavigate();

      const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
      }
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  // const [searchResult, setSearchResult] = useState([]); 

  // Function to handle search
  const handleSearch = () => {   
    navigateToSearch(`/search/${searchQuery}`)
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
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
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
          <div className="dropdown">
             <i className="fa fa-user icon-circle" style={{cursor:'pointer'}} id="dropdownMenuButton" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' onClick={toggleDropdown}>
             </i>
             <div className={`dropdown-menu ${isDropdownOpen ? 'show' : '' }`}  aria-labelledby="dropdownMenuButton">
             <Link className="dropdown-item" to='/usersignin'><strong>Login</strong></Link>
               <Link className="dropdown-item" to='/usersignup'>New Customer ? <strong>SignUp</strong> </Link>
              
             </div>
           </div>
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
  );
};

export default Navbar;
