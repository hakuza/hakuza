import React from 'react';

var Coupon = function (props) {
  	if (!props.coupon) {
  		return (
  	  <div>
  	    <button className="coupon-button">Have a coupon?</button>
  	  </div>	
  	  )
  	} else {
	    return (
	  	<form>  
		    <input type="text"></input>
		    <button>Coups</button>
	    </form> 
	    
	    );
  }  
}


export default Coupon