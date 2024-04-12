import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../images/ecommerce icon.png';
import './ProfileNavbar.css';

const ProfileNavbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = ()=>{
      setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout=(e)=>{
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('auth');
          }

  return (
    <>
     <div className=' container  '>
        <div className='logo width '>
            <Link to='/userdashboard'>
            <img src={logo} alt='' style={{width:'50px', height:'50px'}}/>
            </Link>
          </div>
          
          <div className="dropdown">
            <i className="fa fa-user icon-circle " style={{cursor: "pointer"}} id="dropdownMenuButton" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' 
            onClick={toggleDropdown}>
            </i>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : '' }`}  aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to='/myorders'><strong>My Orders</strong></Link>
              <Link className="dropdown-item" to='/profile'><strong>My Profile</strong></Link>
              <Link className="dropdown-item" to='/' onClick={(e)=>{handleLogout(e)}}><strong>Log out</strong></Link>             
            </div>
          </div>
    </div>
  </>
  )
}

export default ProfileNavbar