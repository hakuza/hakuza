import React from 'react';
import Modal from 'react-modal';

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

          <h2 ref={subtitle => this.subtitle = subtitle}>Sign up and start Learning!</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
		)

  }


}



export default Buy