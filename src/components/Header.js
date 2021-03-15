const Header = () => {
  return (
    <div className='header-container'>
      <h1 id='logo'>WestTech</h1>
      <ul className='nav-menus'>
        <li className='nav-items'>Home</li>
        <li className='nav-items'>Products</li>
        <li className='nav-items'>About</li>
      </ul>
      <div>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </div>
  );
};

export default Header;
