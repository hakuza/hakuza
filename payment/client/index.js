import React from 'react';
import ReactDOM from 'react-dom';
import Preview from './components/preview.jsx';
import InfoBody from './components/infoBody.jsx';

class Payment extends React.Component { 
	constructor (props) {
	  super(props);

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