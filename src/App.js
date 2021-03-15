import './App.css';
import showcaseImg from './img/showcase.jpg';
import feature1 from './img/feature/feature1.jpg';
import feature2 from './img/feature/feature2.jpg';
import feature3 from './img/feature/feature3.jpg';

const App = () => {
  return (
    <div className='App'>
      <div className='hero-image'>
        <div className='hero-content'>
          <h2>Discover True Power</h2>
          <button className='shop-btn'>SHOP NOW</button>
        </div>
      </div>
      <div className='showcase-1'>
        <div className='showcase-img-container'>
          <img src={showcaseImg} />
        </div>
        <div className='showcase-text'>
          <h3>Custom Crafted PC</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className='shop-btn'>SHOP NOW</button>
        </div>
      </div>
      <div className='features'>
        <div>
          <img src={feature1}></img>
          <h3>Made with quality parts</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src={feature2}></img>
          <h3>Built with perfection</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src={feature3}></img>
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
          <input type='text' className='news-input'></input>
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
