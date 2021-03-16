import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import photo from '../img/showcase.jpg';

const Products = () => {
  return (
    <div className='products-container'>
      <h1>Products</h1>
      <div className='products'>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
        <div className='product'>
          <img src={photo}></img>
          <p className='product-titles'>SkyTech Shadow</p>
          <p>$824.99</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
