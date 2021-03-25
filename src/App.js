import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <div className='hero-image'>
        <div className='hero-content'>
          <h2>Discover True Power</h2>
          <p>Ultimate performance for gamers and creators</p>
          <Link to='/products'>
            <button className='shop-btn-white'>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className='showcase-1'>
        <div className='showcase-img-container'>
          <img src={process.env.PUBLIC_URL + '/img/showcase.jpg'} />
        </div>
        <div className='showcase-text'>
          <h3>Custom Crafted PC</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to='/products'>
            <button className='shop-btn'>SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className='features'>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/feature/feature1.jpg'}></img>
          <h3>Made with quality parts</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/feature/feature2.jpg'}></img>
          <h3>Built with perfection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/feature/feature3.jpg'}></img>
          <h3>Tested rigoriously and ready for use</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className='newsletter'>
        <h3>Join our newsletter!</h3>
        <form>
          <input
            type='text'
            className='news-input'
            placeholder='Email address'
          ></input>
          <input
            type='submit'
            className='news-submit-btn'
            value='Subscribe'
          ></input>
        </form>
      </div>
    </div>
  );
};

export default App;
