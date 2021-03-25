import React, { useState } from 'react';

const Product = props => {
  const data = props.location.product.value;
  const { addToCartHandler } = props;

  const [product, setProduct] = useState({
    id: data.id,
    img: data.img,
    title: data.title,
    description: data.description,
    price: data.price,
    totalPrice: data.totalPrice,
    qty: data.qty,
  });

  const qtyHandler = e => {
    const qty = parseInt(e.target.value);
    const totalPrice = product.price * qty;
    setProduct({ ...product, qty, totalPrice });
  };

  return (
    <div className='product-page-container'>
      <div className='product-page-contents'>
        <div className='product-page-img-container'>
          <img src={process.env.PUBLIC_URL + product.img} />
        </div>
        <div className='product-page-content'>
          <h3 className='product-page-title'>{product.title}</h3>
          <p className='product-page-price'>${product.price}</p>
          <div className='product-page-quantity'>
            <label>Quantity</label>
            <input
              type='number'
              min='1'
              defaultValue='1'
              className='quantity'
              onChange={qtyHandler}
            ></input>
          </div>
          <div className='product-page-button'>
            <button
              className='add-to-cart'
              onClick={() => addToCartHandler(product)}
            >
              ADD TO CART
            </button>
            <button className='buy-now'>BUY IT NOW</button>
          </div>
          <p className='product-page-description'>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
