import React from 'react';
import Img from 'react-image'

var Preview = function (props) { 
	if (!props.thumbnail) {
	  return (
     <div>Loading...</div>
	  )
	} else {
		console.log(props.thumbnail.courseToPurchase)
	  return (
	    <div className="preview-window"> 
	      <span className="preview-intro"></span>
	      <img src={props.thumbnail.courseToPurchase.image_240x135} className="preview-image"/>
	    </div>
	  )
  }
}


export default Preview

