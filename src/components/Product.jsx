import React, { useEffect } from "react";
import './Product.css'

import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from "./Hero";
import Animation from "./Animation";
import Services from "./Services";

const Product = ({items, cart , setCart}) => {
 
   
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return (
    <>
    {location.pathname ==='/'?  <Hero/>:<></>}
    
    {location.pathname ==='/'?<Services/>:<></>}
    
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className=" xx container my-5"  data-aos="fade-top">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card All-card" style={{ width: "23rem"}}>
                    <Link to={`/product/${product.id}`}
                     style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>

                    <img
                      src={product.imgSrc}
                      className="card-img-top p-4 "
                      alt="..."
                      />
                      </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                      onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                       className="btn btn-warning"
                       >Add To Cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
          <div className='text-center'>
            <h1>Expole more items</h1>
            <button className="btn btn-success"><a href="#" className="text-white text-decoration-none">Continue Shopping...</a></button>
           
            </div>
      </div>
     
    </>
  );
};

export default Product;
