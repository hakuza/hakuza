import React from 'react';
import Axios from 'axios';
import Buy from './buy.jsx';
import Cart from './cart.jsx';
import Coupon from './coupon.jsx';



class InfoBody extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    Axios.get('http://127.0.0.1:3003/courses')
    .then(function (response){
      this.setState({courses:response.data, courseToPurchase: response.data[0]})  
    })
    .catch(function(err){
      console.error(err) 
    })      
  }

  render () {
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

}

export default InfoBody



