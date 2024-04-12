import React, { useState } from 'react';
import styles from './AdminSignin.module.css'; // Import CSS module for styling
import { useNavigate } from 'react-router-dom';
import { adminLoginApi} from '../../../api/LoginApi';



const AdminSignin = () => {
    // State variables to store username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigateToDashboard = useNavigate();

    // const { login, setLogin } = useContext(UserContext);

    const authenticate = (e) => {
        e.preventDefault();
        adminLoginApi({ username, password }).then((response) => {
            sessionStorage.setItem('auth', response);
            sessionStorage.setItem('user', username);
            
            navigateToDashboard('/admindashboard');
        }).catch((error) => {
            console.error(error);
            alert('Invalid credentials');
        });
    }
    

    return (
        <>
        {/* <Navbar /> */}
        <div className='login-con text-center p-10' style={{height: "300px"}}>
        <div className={styles.container}>
            <h2 className={styles.title}><b>Login</b></h2>
            <form onSubmit={(e) => authenticate(e)} className='p-2'>
                <div className="form-group">
                    <label htmlFor="username">Admin Name</label>
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

        </div>
        </div>
        
        </>
    );
};

export default AdminSignin;