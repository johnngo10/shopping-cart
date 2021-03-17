const Product = props => {
  const product = props.location.product.value;
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
            ></input>
          </div>
          <div className='product-page-button'>
            <button className='add-to-cart'>ADD TO CART</button>
            <button className='buy-now'>BUY IT NOW</button>
          </div>
          <p className='product-page-description'>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
