import React, { useState } from 'react'
import { updatePassword } from '../../../../api/UserApi';
import ProfileNavbar from '../profileNavbar/ProfileNavbar';
import Footer from '../../../home/footer/Footer';
import styles from '../../../home/userAuth/signin/UserSignin.module.css';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {

    const[oldPassword, setOldPassword]=useState('');
    const[newPassword, setNewPassword]=useState('');
    const[confirmPassword, setConfirmPassword]=useState('')

    const navigateToUserDashboard=useNavigate('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newPassword===confirmPassword){
        const username=sessionStorage.getItem("user")
        updatePassword({username, oldPassword, newPassword}).then((response)=>{
          if(response==="Invalid old password"){
            alert("Invalid old password")
          }else{
            console.log("Password changed Successfully !!!")
            alert("Password changed Successfully !!!")
            navigateToUserDashboard('/userdashboard');}
        })} else{
          alert("Passwords don't match");
        }
    }

  return (
    <div>
        <ProfileNavbar/>
        <div className={styles.container}>
        <h1 className="text-center pt-3">Change Password</h1>
        
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
          <tr>
              <td className='pt-5'>
                <label htmlFor="oldPassword">Old Password</label>
              </td>
              <td className='pt-5'>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  name="oldPassword"
                  value={oldPassword}
                  onChange={(e)=>setOldPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='pt-3'>
                <label htmlFor="newPassword">New Password</label>
              </td>
              <td className='pt-3'>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className='pt-3'> 
                <label htmlFor="confirmPassword">Confirm Password</label>{" "}
              </td>
              <td className='pt-3'>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr className="text-center">
              <td colSpan="2" className='py-3'>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ChangePassword