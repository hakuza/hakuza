import React from 'react';
import Modal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock,faUser} from '@fortawesome/fontawesome-free-solid'


class Buy extends React.Component {
  constructor(props){
    super(props)

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#505763';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
		return (
		  <div className="buy-main"> 
		    <button 
		    className="buy-now-button"
		    onClick={this.openModal}
		    >Buy Now</button>	

		  <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="buy-modal"
          overlayClassName="overlay"
          contentLabel="Example Modal"
        >
         <div className="forms">
            <div className="modal-header">
		          <h2 ref={subtitle => this.subtitle = subtitle}>Sign up and start Learning!</h2>
		          <button className="close-modal" onClick={this.closeModal}>x</button>
		        </div>
	          <form className="modal-form"> 
	            <FontAwesomeIcon className="icons" icon={faEnvelope} /> 
					    <input type="text" placeholder={<FontAwesomeIcon className="icons" icon={faEnvelope}/>} className="info-input"></input>
				    </form> 
				    <form className="modal-form">  
					    <input type="text" placeholder="Enter Coupon" className="info-input"></input>
				    </form> 
				    <form className="modal-form">  
					    <input type="text" placeholder="Enter Coupon" className="info-input"></input>
				    </form> 
	          <div>
	          <input type="checkbox"></input>
	          <span>You're in for exciting deals and personalized recommendations</span>
	          </div>
	           <button onClick={this.closeModal}>Sign Up</button>
	           <div>By signing up, you agree to our Terms of Use and Privacy Policy.</div>
	           <div className="modal-footer">Already have an account? Log In</div>
          </div>
        </Modal>
      </div>
		)

  }


}



export default Buy