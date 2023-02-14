import React from 'react'
import './App.css';
import Header from './header/Header'
import Home from './home/Home'
import Footer from './footer/Footer'
import Paintings from './paintings/Paintings'
import Reproductions from './reproductions/Reproductions'
import ProductInfo from './productinfo/ProductInfo'
import Likes from './likes/Likes'
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import CheckOutSuccess from './checkout/CheckOutSuccess'
import Signin from './signin/Signin'
import Signup from './register/Signup'
import Payment from './payment/Payment'
import UserScreen from './userprofile/UserScreen'
// import StripeCheckOut from './cart/StripeCheckout'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/paintings' element={<Paintings/>} />
          <Route path='/reproductions' element={<Reproductions/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/likes' element={<Likes/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/checkoutsuccess' element={<CheckOutSuccess/>} />
          {/* <Route path='/stripecheckout' component={StripeCheckOut} /> */}
          <Route path='/payment' element={<Payment/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/userscreen' element={<UserScreen/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
