import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cartItem } = props;
  const [products, setProducts] = useState(cartItem);

  // if (cartItem.id !== '' && products.length < 1) {
  //   const arr = products.concat(cartItem);
  //   setProducts(arr);
  //   console.log(products.length);
  // } else if (cartItem.id !== '' && products.length > 0) {
  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].id !== cartItem.id) {
  //       const arr = products.concat(cartItem);
  //       setProducts(arr);
  //       console.log('concat');
  //     } else if (products[i].id === cartItem.id) {
  //       products[i].qty += cartItem.qty;
  //       console.log('add qty');
  //       console.log(products.length);
  //     }
  //   }
  //   console.log('2nd');
  //   console.log(products);
  // } else {
  //   console.log('error');
  // }

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h1>Your Cart</h1>
        <Link to='/products' className='Link'>
          <p>Continue Shopping</p>
        </Link>
      </div>
      {products.length < 1 ? (
        <div>
          <p>Your cart is currently empty</p>
        </div>
      ) : (
        <React.Fragment>
          <div className='cart-contents'>
            <div className='table-header'>
              <p className='table-header-1'>PRODUCT</p>
              <p className='table-header-2'>PRICE</p>
              <p className='table-header-3'>QUANTITY</p>
              <p className='table-header-4'>TOTAL</p>
            </div>
            {products.map((value, index) => {
              return (
                <div className='cart-product' key={index}>
                  <img src={process.env.PUBLIC_URL + value.img} />
                  <div className='cart-product-title-cont'>
                    <p className='cart-product-title'>{value.title}</p>
                    <p className='cart-product-remove'>Remove</p>
                  </div>
                  <p className='cart-product-price'>${value.price}</p>
                  <div className='cart-product-quantity'>
                    <input
                      type='number'
                      min='1'
                      defaultValue={value.qty}
                    ></input>
                  </div>
                  <p className='cart-product-total'>${value.totalPrice}</p>
                </div>
              );
            })}
          </div>
          <div className='total-container'>
            <div>
              <p className='subtotal'>Subtotal</p>
              <p>$120.99</p>
            </div>
            <button className='checkout-btn'>CHECK OUT</button>
          </div>
        </React.Fragment>
      )}
      {/* <div className='cart-header'>
        <h1>Your Cart</h1>
        <Link to='/products' className='Link'>
          <p>Continue Shopping</p>
        </Link>
      </div>
      <div className='cart-contents'>
        <div className='table-header'>
          <p className='table-header-1'>PRODUCT</p>
          <p className='table-header-2'>PRICE</p>
          <p className='table-header-3'>QUANTITY</p>
          <p className='table-header-4'>TOTAL</p>
        </div>
        {products.map((value, index) => {
          return (
            <div className='cart-product'>
              <img src={process.env.PUBLIC_URL + value.img} />
              <div className='cart-product-title-cont'>
                <p className='cart-product-title'>{value.title}</p>
                <p className='cart-product-remove'>Remove</p>
              </div>
              <p className='cart-product-price'>${value.price}</p>
              <div className='cart-product-quantity'>
                <input type='number' min='1' defaultValue='1'></input>
              </div>
              <p className='cart-product-total'>$175.00</p>
            </div>
          );
        })}
      </div>
      <div className='total-container'>
        <div>
          <p className='subtotal'>Subtotal</p>
          <p>$120.99</p>
        </div>
        <button className='checkout-btn'>CHECK OUT</button>
      </div> */}
    </div>
  );
};

export default Cart;
