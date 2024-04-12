import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, updateProduct } from '../../../../api/ProductsApi';
import Sidebar from '../../adminDashboard/components/Sidebar';

const EditProducts = () => {

    const [product, setProduct]= useState([])
    const [name, setName]= useState('')
    const [category, setCategory]= useState('');
    const [price, setPrice]= useState();
    const [imageUrl, setImageUrl]= useState('');

    const params= useParams();
    const id=params.productId

    useEffect(()=>{
        getProductById(id).then((response)=>{
            setProduct(response);
            console.log(response);
            setName(response.name);
            setCategory(response.category);
            setPrice(response.price);
            setImageUrl(response.imageUrl);
            console.log(product);
        })
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        updateProduct({id, name, category, price, imageUrl}).then((response)=>{
            console.log(response);
            alert("Product Updated Successfully");
           
            handleBack(e);
        }).catch((error)=>{
            console.log(error);
        })
    }


    const goBack= useNavigate();

    const handleBack=(e)=>{
        e.preventDefault();
        goBack(-1);}


  return (
   <div className='grid-container1'>
        <Sidebar/>
    <div className="add-product-container">
      <h2 className="heading">Edit Products</h2>
      <form className="product-form" onSubmit={(e)=>handleSubmit(e)}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td><input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} /></td>
            </tr>
            <tr>
              <th>Category</th>
              <td>
                <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} >
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
              <td><input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/></td>
            </tr>
            <tr>
              <th>Image URL</th>
              <td><input type="text" name="imageUrl"  value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value="Edit"/><br/>
        <button className="btn btn-danger"  onClick={(e)=>handleBack(e)}>Cancel</button>
      </form>
    </div>
    </div>
 
  )
};

export default EditProducts;