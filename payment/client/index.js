import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react'
import Axios from 'axios';
import Preview from './components/preview.jsx';
import InfoBody from './components/infoBody.jsx';
import {getYoutubeVideos} from './infoHelpers.js'


class Payment extends React.Component { 
	constructor (props) {
	  super(props);
	}

	componentDidMount () {
    //get course data from database set state
    var context = this;
	  Axios.get('http://127.0.0.1:3003/courses')
    .then(function (response){
      context.setState({courses:response.data, courseToPurchase: response.data[75]})  
    })
    .catch(function(err){
      console.error(err) 
    })
    //get preview videos for preview component
    getYoutubeVideos('hackreactor bootcamp',(data)=> {
      this.setState({previewVideo:data[1]})  
    })    	
	}

  render () {
    return (
    	<div className="payment-main">
    	  <Preview 
          thumbnail= {this.state}
        />
    	  <InfoBody 
          course= {this.state}
        />
    	</div>
    );
  }
}

ReactDOM.render(<Payment />, document.getElementById('app'))