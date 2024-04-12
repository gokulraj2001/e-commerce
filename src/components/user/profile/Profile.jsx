import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserDetails } from '../../../api/UserApi';
import ProfileNavbar from './profileNavbar/ProfileNavbar';
import Footer from '../../home/footer/Footer';

const Profile = ({CartItem}) => {
    const[user, setUser]= useState('');
    (function(){
        getUserDetails().then((response) => {
            setUser(response); 
        });
    })();
  return (
    <div>
       <ProfileNavbar/>
      <div className="d-flex flex-column align-items-center text-center">
      <h2 className="mb-4">Profile Details</h2>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2LoxZZsAXJ0nJSh8NNyCkcwpTvKSoGwGvw&usqp=CAU"
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }}
        />
        <div>
          <p><b>{user.username}</b></p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.mobile}</p>
        </div>
        <Link className="btn btn-success mt-3" to='/editprofile'><button >Edit Profile</button></Link>
        <Link className="btn btn-success mt-3" to='/changepassword'><button >Change Password</button></Link>
      </div>
      <br></br>
      <Footer/>
    </div>
   
  );
};

export default Profile;
