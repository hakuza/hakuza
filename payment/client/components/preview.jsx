import React from 'react';
import Img from 'react-image'

var Preview = function (props) { 
	var counter = 0
	if (!props.thumbnail) {
	  return (
     <div>Loading...</div>
	  )
	} else {
		console.log(props.thumbnail.courseToPurchase)
	  return (
	    <div className="preview-window"> 
	      <img src={props.thumbnail.courseToPurchase.image_75x75}/>
	    </div>
	  )
  }
}








export default Preview

