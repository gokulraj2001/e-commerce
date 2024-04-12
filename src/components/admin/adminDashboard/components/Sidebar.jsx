import React from 'react'
// import '../AdminDashboard.css'
import { BsCart3, BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import logo from "../../../../images/ecommerce icon.png"

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar"  className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <Link to='/admindashboard'>
            <img src={logo} alt='' style={{height:'50px',width:'50px'}} />
            </Link>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>x</span>
        </div>
        <ul className='sidebar-list' >
            <li className='sidebar-list-item ' >
                <Link to="/admindashboard" className='d-flex' style={{textDecoration:"none", color:'black'}}  >
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/products" className='d-flex' style={{textDecoration:"none", color:'black'}}>
                    <BsFillArchiveFill className='icon'/>Products
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <Link to="/admin/categories" className='d-flex' style={{textDecoration:"none", color:'black'}}>
                    <BsFillGrid3X3GapFill className='icon'/>Categories
                </Link>
            </li> */}
            <li className='sidebar-list-item'>
                <Link to="/admin/customers" className='d-flex' style={{textDecoration:"none", color:'black'}}>
                    <BsPeopleFill className='icon'/>Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/orders" className='d-flex' style={{textDecoration:"none", color:'black'}}>
                    <BsListCheck className='icon'/>Orders
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/" className='d-flex' style={{textDecoration:"none", color:'black'}}>
                <i className="fa fa-sign-out icon"></i>Logout
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
