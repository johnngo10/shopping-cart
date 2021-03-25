import { Link } from 'react-router-dom';

const Header = props => {
  const { cartNum } = props;

  return (
    <div className='header-container'>
      <h1 id='logo'>
        <Link to='/' className='Link'>
          WestTech
        </Link>
      </h1>
      <ul className='nav-menus'>
        <Link to='/' className='Link'>
          <li className='nav-items'>Home</li>
        </Link>
        <Link to='/products' className='Link'>
          <li className='nav-items'>Products</li>
        </Link>
      </ul>
      <div id='cart'>
        <Link to='/cart' className='Link'>
          <div className='cart-content'>
            <i className='fas fa-shopping-cart'></i>
            <p>Cart</p>
            <p>({cartNum})</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
