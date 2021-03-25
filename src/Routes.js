import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import App from './App';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

const Routes = () => {
  const [cartNum, setCartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      img: '/img/products/product1.jpg',
      title: 'IBUYPOWER Trace 4 9310',
      description:
        'AMD Ryzen 5 3600 3.6GHz, AMD Radeon RX 5500 XT 4GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home',
      price: 1069.99,
      totalPrice: 1069.99,
      qty: 1,
    },
    {
      id: uuidv4(),
      img: '/img/products/product2.jpg',
      title: 'Skytech Archangel',
      description:
        'Ryzen 5 3600 3.6GHz, GTX 1660 Super 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans, Windows 10 Home 64-bit, 802.11AC Wi-Fi',
      price: 1324.99,
      totalPrice: 1324.99,
      qty: 1,
    },
    {
      id: uuidv4(),
      img: '/img/products/product3.jpg',
      title: 'Skytech Chronos Mini',
      description:
        'AMD Ryzen 3 3100, NVIDIA GTX 1650 4GB, 8GB DDR4, 500GB SSD, A320 Motherboard, 550 Watt Bronze, AC Wi-Fi, Windows 10 Home 64-bit',
      price: 974.99,
      totalPrice: 974.99,
      qty: 1,
    },
    {
      id: uuidv4(),
      img: '/img/products/product4.jpg',
      title: 'Skytech Shadow',
      description:
        'AMD Ryzen 3 3100, GTX 1660 6G, 16GB DDR4 3000, 1TB SSD, A520 Motherboard, 500W PSU, Black',
      price: 1749.99,
      totalPrice: 1749.99,
      qty: 1,
    },
    {
      id: uuidv4(),
      img: '/img/products/product5.jpg',
      title: 'iBUYPOWER Element Mini 9300',
      description:
        'AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home',
      price: 584.99,
      totalPrice: 584.99,
      qty: 1,
    },
    {
      id: uuidv4(),
      img: '/img/products/product6.jpg',
      title: 'iBUYPOWER 1000iV2',
      description:
        'Intel i7-10700F 2.9GHz, NVIDIA GeForce RTX 2060 6GB, 16GB DDR4 RAM, 480GB SSD, 2TB HDD, WiFi Ready, Windows 10 Home',
      price: 1499.99,
      totalPrice: 1499.99,
      qty: 1,
    },
  ]);

  const addToCartHandler = product => {
    const { id, img, title, description, price, totalPrice, qty } = product;
    const item = { id, img, title, description, price, totalPrice, qty };

    if (cartItems.length < 1) {
      setCartItems([...cartItems, item]);
      setCartNum(cartNum + qty);
    } else if (cartItems.findIndex(x => x.id === item.id) > -1) {
      setCartNum(cartNum + qty);
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
          cartItems[i].totalPrice += item.totalPrice;
          return (cartItems[i].qty += item.qty);
        }
      }
    } else if (cartItems.findIndex(x => x.id === item.id) < 0) {
      setCartNum(cartNum + qty);
      setCartItems([...cartItems, item]);
    }
  };

  const removeCartHandler = (id, qty) => {
    const index = cartItems.findIndex(item => item.id === id);
    setCartNum(cartNum - qty);
    return cartItems.splice(index, 1);
  };

  const qtyCartHandler = (id, qty, price) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id && cartItems[i].qty > qty) {
        setCartNum(cartNum - 1);
        cartItems[i].qty = qty;
        cartItems[i].totalPrice -= price;
      } else if (cartItems[i].id === id && cartItems[i].qty < qty) {
        setCartNum(cartNum + 1);
        cartItems[i].qty = qty;
        cartItems[i].totalPrice += price;
      }
    }
  };

  return (
    <BrowserRouter>
      <Header cartNum={cartNum} />
      <Switch>
        <Route exact path='/' component={App} />
        <Route
          exact
          path='/product/:id'
          render={props => (
            <Product {...props} addToCartHandler={addToCartHandler} />
          )}
        />
        <Route
          exact
          path='/products'
          render={props => <Products {...props} productArr={products} />}
        />
        <Route
          exact
          path='/cart'
          render={props => (
            <Cart
              {...props}
              cartItems={cartItems}
              removeCartHandler={removeCartHandler}
              qtyCartHandler={qtyCartHandler}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
