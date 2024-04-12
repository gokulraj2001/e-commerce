import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    </div>
  );
}

export default AdminDashboard