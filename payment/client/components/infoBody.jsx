import React from 'react';
import Axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCaretSquareRight,faCertificate,faDotCircle,faFileAlt,faMobileAlt,faPlayCircle,faStopwatch,faWifi} from '@fortawesome/fontawesome-free-solid'
import Buy from './buy.jsx';
import Cart from './cart.jsx';
import Coupon from './coupon.jsx';
import {calculateRandomPrice} from '../infoHelpers.js'


class InfoBody extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props.course)
  }

  render () {
    if (!this.props.course) {
      return (<div>Loading...</div>) 
    } else {
      return (
        <div className="info-body-main"> 
          <div className="price">
            <span className="sale-price">{this.props.course.courseToPurchase.price}</span>
            <span className="original-price">{calculateRandomPrice(this.props.course.courseToPurchase.price)}</span>
            <span className="percent-sale">{this.props.course.courseToPurchase.price / Number(calculateRandomPrice(this.props.course.courseToPurchase.price).slice(1))}</span>
             <span className="sale-time-left">
               <FontAwesomeIcon icon={faStopwatch} />
               <span>{(Math.floor(Math.random() * 4 + 1)) + 'days left at this price'}</span>
             </span>
          </div>
          <Buy />
          <Cart />
          <div>30-Day Money-Back Guarantee</div>
          <div>Includes:</div>
            <div className="info-vid-time">
              <FontAwesomeIcon icon={faCaretSquareRight} />
              <span>{Math.floor((this.props.course.courseToPurchase.num_lectures)/2) + ' hours on-demand video'}</span>
            </div>
             <div className="suplemental-recourses">
              <FontAwesomeIcon icon={faFileAlt} />
              <span>{Math.floor(Math.random() * (this.props.course.courseToPurchase.num_quizzes) + 2) + 'Supplemental Resources'}</span>
            </div>
            <div className="info-lifetime">
              <FontAwesomeIcon icon={faDotCircle} />
              <span>{'Full lifetime access'}</span>
            </div>
            <div className="info-access">
              <FontAwesomeIcon icon={faMobileAlt} />
              <span>{'Access on Mobile and TV'}</span>
            </div>
            <div className="info-certificate">
              <FontAwesomeIcon icon={faCertificate} />
              <span>{'Certificate Of Completion'}</span>
            </div>
          <Coupon />
        </div>
      )
    }
  }
}

export default InfoBody



