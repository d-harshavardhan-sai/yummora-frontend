import React, { useState, useEffect } from 'react';
import { API_URL } from '../data/apiPath';

const AllProducts = () => {
  const [products, setProducts]= useState([]);

  const productsHandler = async()=>{
          const firmId = localStorage.getItem('firmId');
      try {
              const response = await fetch(`${API_URL}/product/${firmId}/products`);
              const newProductsData = await response.json();
              setProducts(newProductsData.products);
              console.log(newProductsData);
      } catch (error) {
          console.error("failed to fetch products", error);
          alert('failed to fetch products')
      }
  }

  useEffect(()=>{
      productsHandler()
      console.log('this is useEffect')
  },[])

  const deleteProductById = async(productId)=>{
              try {
                      const response = await fetch(`${API_URL}/product/${productId}`,{
                          method: 'DELETE'
                      })
                  if(response.ok){
                      setProducts(products.filter(product =>product._id !== productId));
                      confirm("are you sure, you want to delete?")
                      alert("Product deleted Successfully")
                  }
              } catch (error) {
                  console.error('Failed to delete product');
                  alert('Failed to delete product')
              }
  }

  
return (
  <div className='productSection'>
      {!products ? (
          <p>No products added</p>
      ) : (
          <table className="product-table">
              <thead>
                  <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
              {products.map((item) => (
  <tr key={item._id}>
    <td>{item.productname}</td>
    <td>₹{item.price}</td>
    <td>
      {item.image && (
        <img
          src={`${API_URL}/uploads/${item.image}`}
          alt={item.productname}
          style={{ width: '50px', height: '50px' }}
        />
      )}
    </td>
    <td>
      <button onClick={() => deleteProductById(item._id)} className='deleteBtn'>
        Delete
      </button>
    </td>
  </tr>
))}

              </tbody>
          </table>
       )}
  </div>
)
}

export default AllProducts