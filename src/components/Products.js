import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Products = props => {
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      img: '/img/products/product1.jpg',
      title: 'IBUYPOWER Trace 4 9310',
      description:
        'AMD Ryzen 5 3600 3.6GHz, AMD Radeon RX 5500 XT 4GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home',
      price: 926.99,
    },
    {
      id: uuidv4(),
      img: '/img/products/product2.jpg',
      title: 'Skytech Archangel',
      description:
        'Ryzen 5 3600 3.6GHz, GTX 1660 Super 6G, 500GB SSD, 16GB DDR4 3000MHz, RGB Fans, Windows 10 Home 64-bit, 802.11AC Wi-Fi',
      price: 1224.99,
    },
    {
      id: uuidv4(),
      img: '/img/products/product3.jpg',
      title: 'Skytech Chronos Mini',
      description:
        'AMD Ryzen 3 3100, NVIDIA GTX 1650 4GB, 8GB DDR4, 500GB SSD, A320 Motherboard, 550 Watt Bronze, AC Wi-Fi, Windows 10 Home 64-bit',
      price: 799.99,
    },
    {
      id: uuidv4(),
      img: '/img/products/product4.jpg',
      title: 'Skytech Shadow',
      description:
        'AMD Ryzen 3 3100, GTX 1660 6G, 16GB DDR4 3000, 1TB SSD, A520 Motherboard, 500W PSU, Black',
      price: 999.99,
    },
    {
      id: uuidv4(),
      img: '/img/products/product5.jpg',
      title: 'iBUYPOWER Element Mini 9300',
      description:
        'AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home',
      price: 584.99,
    },
    {
      id: uuidv4(),
      img: '/img/products/product6.jpg',
      title: 'iBUYPOWER 1000iV2',
      description:
        'Intel i7-10700F 2.9GHz, NVIDIA GeForce RTX 2060 6GB, 16GB DDR4 RAM, 480GB SSD, 2TB HDD, WiFi Ready, Windows 10 Home',
      price: 1839.99,
    },
  ]);

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
        {/* <div className='product'>
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
        </div> */}
      </div>
    </div>
  );
};

export default Products;
