import React, { useState } from 'react';
import styles from '../signin/UserSignin.module.css';
// import Navbar from '../../common/header/Navbar';
// import { changePassword } from '../../api/LoginApi';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../../../api/LoginApi';
import AuthNavbar from '../authNavbar/AuthNavbar';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigateToLogin= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
       

        if (password === confirmPassword) {
            changePassword({email, password}).then((response)=>{
                if(response==="Invalid email"){
                    alert("Invalid email")
                }else{
                alert("Password changed Successfully !!! \n Redirecting to login page...");
                navigateToLogin('/usersignin');}
            })
        } else{
            alert('Passwords do not match.');
            return;
        }

    };

    return (
        <>
        <AuthNavbar/>
        <div className='for-con'>
        <div className={styles.container}>
            <div className="justify-content-center text-center mt-5">
                {/* <div className="col-12"> */}
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                    </form>
                </div>
            {/* </div> */}
        </div>
        </div>
        </>
    );
};

export default ForgotPasswordForm;