import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { deleteProduct, getAllProducts } from "../../../api/ProductsApi";
import Sidebar from "../adminDashboard/components/Sidebar";
import { Link } from "react-router-dom";
const AllProducts=()=>{

    const [products, setProducts]= useState([])

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let orderArray=await getAllProducts();
                setProducts(orderArray)
                console.log(products)
            } catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    const handleDelete=(id)=>{
        deleteProduct(id).then((response)=>{
            console.log("Product deleted")
            alert("Product deleted.")
            window.location.reload();
        })
    }


    return(

        <div className='grid-container1'>
        <Sidebar/>
        <div className="all-products-container" >
            <h2 className="all-products-heading" style={{textAlign:'center'}}>All Products</h2>
            <div style={{textAlign:'end', marginRight:'70px'}}><Link to="/admin/addproduct"><button >Add Products</button></Link></div>
            <br/>
            <table className="all-products-table" style={{margin:'auto'}}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Category</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {/* <tr>
                        <td>1</td>
                        <td>Mobile</td>
                        <td>Iphone 15</td>
                        <td><img src={iphone} alt="iphone 15" width={80} height={80}/></td>
                        <td>70000</td>
                        <td>
                            <button className="btn1"><i class="fa fa-edit"></i></button>
                            <button className="btn"><i className="fa fa-trash"></i></button>
                        </td>
                    </tr> */}

                    {products.map((product,index) => (             
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td><img src={product.imageUrl} alt="iphone 15" width={80} height={80}/></td>
                    <td>₹{product.price}.00</td>
                    <td width={100}>
                            <Link to={`/admin/products/edit/${product.id}`}><button className="btn1"><i class="fa fa-edit"></i></button></Link>
                            <button className="btn2" onClick={()=>handleDelete(product.id)}><i className="fa fa-trash"></i></button>
                        </td>
                </tr>
               
))}
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default AllProducts;