import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Products = props => {
  const { productArr } = props;
  const [products, setProducts] = useState(productArr);
  return (
    <div className='products-container'>
      <h1>Products</h1>
      <div className='products'>
        {products.map((value, index) => {
          return (
            <Link
              className='Link'
              key={index}
              to={{ pathname: `/product/${value.id}`, product: { value } }}
            >
              <div className='product'>
                <img src={process.env.PUBLIC_URL + value.img} />
                <p className='product-titles'>{value.title}</p>
                <p>${value.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
