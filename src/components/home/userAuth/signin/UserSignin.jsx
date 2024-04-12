// LoginForm.jsx
import React, { useEffect, useState } from 'react';
import styles from './UserSignin.module.css'; // Import CSS module for styling
import { Link, useNavigate } from 'react-router-dom';
import { userLoginApi } from '../../../../api/LoginApi';
import Footer from '../../footer/Footer';
import AuthNavbar from '../authNavbar/AuthNavbar';



const UserSignin = ({CartItem,}) => {
    // State variables to store username and password

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigateToDashboard = useNavigate();
    const navigateToCart=useNavigate();

    useEffect(()=>{
        console.log("Component rendered")
    })

    const authenticate = (e) => {
        e.preventDefault();
        userLoginApi({ username, password }).then((response) => {
            sessionStorage.setItem('auth', response);
            sessionStorage.setItem('user', username);
            alert("Successfully signed in...")
        
            CartItem.length === 0 ? navigateToDashboard('/userdashboard') : navigateToCart('/order')
        }).catch((error) => {
            console.error(error);
            alert('Invalid credentials');
        });
    }

    

    return (
        <>
        <AuthNavbar/>
        <div className='login-con text-center p-2 mt-5 mb-10' style={{height: "400px"}}>
        <div className={styles.container}>
            <h2  className={styles.title} style={{alignContent:'center'}}><b>Login</b></h2>
            <form className="p-2" onSubmit={(e) => authenticate(e)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-success btn-block">Login</button>
            </form>


            <div className="text-center mt-3">
                        <Link to="/forgot">Forgot Password?</Link>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <span>Don't have an account? </span>
                        <Link to="/usersignup"><strong>Sign Up</strong></Link>
                    </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default UserSignin;