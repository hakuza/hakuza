import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Preview from './components/preview.jsx';
import InfoBody from './components/infoBody.jsx';


class Payment extends React.Component { 
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
    	<div className="payment-main">
    	  <Preview />
    	  <InfoBody />
    	</div>
    );
  }
}

ReactDOM.render(<Payment />, document.getElementById('app'))