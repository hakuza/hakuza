import React from 'react';
import ReactDOM from 'react-dom';
import Buy from './buy.jsx';
import Cart from './cart.jsx';
import Coupon from './coupon.jsx';


var infoBody = function (props) {
  return (
    <div className="info-body-main"> 
      <div className="price">price</div>
      <div className="sale-price">sale</div>
      <div className="sale-time">time left</div>
      <Buy />
      <Cart />
      <div>rest of info</div>
      <Coupon />
    </div>
  )
}








export default infoBody