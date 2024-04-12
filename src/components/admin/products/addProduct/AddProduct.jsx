import React, { useState } from "react";
import "./AddProduct.css";
import Sidebar from "../../adminDashboard/components/Sidebar";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../../api/ProductsApi";
const AddProduct = () => {

  const navigateToProducts=useNavigate();

    const [formData, setFormData]= useState({
        name:'',
        category:'',
        price:0,
        imageUrl: ''
    })

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // const handleFileChange=(e)=>{
    //     setFormData({...formData, image: e.target.files[0]});
    // };

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            let result=await addProduct(formData);
            console.log(result)
            alert("Product Added Successfully");
            navigateToProducts("/admin/products");
            window.location.reload();
        } catch(error){
            console.log(error)
        }
    }

    const goBack= useNavigate();

    const handleBack=(e)=>{
        e.preventDefault();
        goBack(-1);



    }
  return (
    <div className='grid-container1'>
        <Sidebar/>
    <div className="add-product-container">
      <h2 className="heading">Add Products</h2>
      <form className="product-form" onSubmit={(e)=>handleSubmit(e)}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th>Category</th>
              <td>
                <select name="category" value={formData.category} onChange={handleChange} >
                    <option hidden>Select a Category</option>
                    <option value="smartphone">Smartphones</option>
                    <option value="powerbanks">Powerbanks</option>
                    <option value="accessories">Accessories</option>
                    <option value="earphones">Earphones</option>
                    <option value="smartwatch">Smartwatches</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td><input type="number" name="price" value={formData.price} onChange={handleChange}/></td>
            </tr>
            <tr>
              <th>Image URL</th>
              <td><input type="text" name="imageUrl"  value={formData.imageUrl} onChange={handleChange}/></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Add"  /><br/>
        <button className="btn btn-danger"  onClick={(e)=>handleBack(e)}>Cancel</button>
      </form>
    </div>
    </div>
  );
};
export default AddProduct