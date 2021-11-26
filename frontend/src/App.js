import React from 'react'
import './App.css';
import Header from './header/Header'
import Home from './home/Home'
import Footer from './footer/Footer'
import Paintings from './paintings/Paintings'
import Likes from './likes/Likes'
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import Signin from './signin/Signin'
import Signup from './register/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
 
  return (
    <>
      <Router >
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/paintings' component={Paintings} />
          <Route path='/cart' component={Cart} />
          <Route path='/likes' component={Likes} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
