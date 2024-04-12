import React, { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../../../../api/UserApi";
import styles from '../../../home/userAuth/signin/UserSignin.module.css';
import ProfileNavbar from "../profileNavbar/ProfileNavbar";
import Footer from "../../../home/footer/Footer";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {

   
    const [user, setUser]= useState("");
    const [username, setUsername]= useState("");
    const [name, setName] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");

const navigateToUserProfile=useNavigate('');


useEffect(() => {
    getUserDetails().then((response) => {
      console.log(response);
        setUsername(response.username);
        setName(response.name);
        setMobile(response.mobile);
        setEmail(response.email);
    }).catch((error)=>{
      console.log(error);
    });
},[])


  const handleSubmit=(e)=>{
    e.preventDefault();
    updateUserDetails({ username, name, email, mobile }).then((response) => {
        alert("User Details Updated Successfully !!!");
        navigateToUserProfile('/profile');
    }).catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again later");
    })
  }

  return (
    <div>
        <ProfileNavbar/>
      <h1 className="text-center">Edit Profile</h1>
      <div className={styles.container}>
      <div className="p-5">
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2LoxZZsAXJ0nJSh8NNyCkcwpTvKSoGwGvw&usqp=CAU"
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }}
        />
        </div>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={(e) => handleSubmit(e)}>
          <table>
          <tr>
              <td>
                <label htmlFor="username">Username</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                //   defaultValue={user.username}
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td className="pt-3">
                <label htmlFor="name">Name</label>
              </td>
              <td className="pt-3">
                <input
                  type="text"
                  className="form-control"
                //   defaultValue={user.name}
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pt-3 ">
                <label htmlFor="mobile">Mobile No</label>{" "}
              </td>
              <td className="pt-3 ">
                <input
                  type="number"
                  pattern="[6789][0-9]{9}"
                  className="form-control"
                //   defaultValue={user.mobile}
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="pt-3">
                <label htmlFor="email">Email</label>{" "}
              </td>
              <td className="pt-3">
                <input
                  type="text-box"
                  className="form-control"
                //   defaultValue={user.email}
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value); console.log(email)}}
                  required
                />
              </td>
            </tr>
            <tr className="text-center">
              <td colSpan="2" className="p-3">
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
      </div>
      <Footer/>
    </div>
  );
};

export default EditProfile;
