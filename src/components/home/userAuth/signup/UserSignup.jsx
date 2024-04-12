

import React, { useState } from 'react';
import styles from './UserSignup.module.css';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../authNavbar/AuthNavbar';
import { signUpApi } from '../../../../api/LoginApi';
import Footer from '../../footer/Footer';


const UserSignup = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigateToSignin = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            signUpApi({ name, username, email, password, mobile }).then((response) => {
                alert("Successfully registered... \n Navigating to Sign in page")
                navigateToSignin('/usersignin');
            }).catch((error) => {
                console.error(error);
                alert("Something went wrong. Please try again later");
            })
        } else {
            alert("Password doesn't match.")
        }
    }

    return (
        <>
        {/* <AuthNavbar/> */}
        <AuthNavbar/>
        <div className={styles.container} >
            <div className="bg-body-secondary d-flex flex-column align-items-center justify-content-center ">
            <div className="row justify-content-center mt-5 " >
                <div className="col-12 text-center ">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <form onSubmit={(e) => handleSignup(e)}>
                        <div className="form-group">
                        <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="mobile"
                                name="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>
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
                            <label htmlFor="password">Password</label>
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
                        
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default UserSignup;