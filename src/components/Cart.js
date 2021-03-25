import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = props => {
  const { cartItems, removeCartHandler, qtyCartHandler } = props;
  const [products, setProducts] = useState(cartItems);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    subtotalHandler();
  }, products);

  const subtotalHandler = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].totalPrice;
    }

    setSubtotal(total.toFixed(2));
  };

  const qtyHandler = e => {
    const qty = parseInt(e.target.value);
    const id = e.target.parentElement.parentElement.getAttribute('id');
    let item = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        item.push(products[i]);
      }
    }

    qtyCartHandler(id, qty, item[0].price);
    subtotalHandler();
  };

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
                <div className='cart-product' key={index} id={value.id}>
                  <div className='cart-img-container'>
                    <Link
                      className='Link'
                      to={{
                        pathname: `/product/${value.id}`,
                        product: { value },
                      }}
                    >
                      <img src={process.env.PUBLIC_URL + value.img} />
                    </Link>
                  </div>
                  <div className='cart-product-title-cont'>
                    <p className='cart-product-title'>{value.title}</p>
                    <p
                      className='cart-product-remove'
                      onClick={() => {
                        removeCartHandler(value.id, value.qty);
                        subtotalHandler();
                      }}
                    >
                      Remove
                    </p>
                  </div>
                  <p className='cart-product-price'>${value.price}</p>
                  <div className='cart-product-quantity'>
                    <input
                      type='number'
                      min='1'
                      defaultValue={value.qty}
                      onChange={qtyHandler}
                    ></input>
                  </div>
                  <p className='cart-product-total'>
                    ${value.totalPrice.toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='total-container'>
            <div>
              <p className='subtotal'>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <button className='checkout-btn'>CHECK OUT</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
