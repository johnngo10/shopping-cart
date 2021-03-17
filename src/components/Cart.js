import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='cart-header'>
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
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
        <div className='cart-product'>
          <img src={process.env.PUBLIC_URL + '/img/products/product1.jpg'} />
          <div className='cart-product-title-cont'>
            <p className='cart-product-title'>IBUYPOWER Trace 4 9310</p>
            <p className='cart-product-remove'>Remove</p>
          </div>
          <p className='cart-product-price'>$1875.00</p>
          <div className='cart-product-quantity'>
            <input type='number' min='1' defaultValue='1'></input>
          </div>
          <p className='cart-product-total'>$175.00</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
