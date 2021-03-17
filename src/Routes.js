import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import App from './App';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
