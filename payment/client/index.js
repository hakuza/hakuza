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
    var context = this;
	  Axios.get('http://127.0.0.1:3003/courses')
    .then(function (response){
      context.setState({courses:response.data, courseToPurchase: response.data[0]})  
    })
    .catch(function(err){
      console.error(err) 
    })    	
	}

  render () {
    return (
    	<div className="payment-main">
    	  <Preview 
          thumbnail= {this.state}
        />
    	  <InfoBody />
    	</div>
    );
  }
}

ReactDOM.render(<Payment />, document.getElementById('app'))