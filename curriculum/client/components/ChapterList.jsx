import React from 'react';
import {Collapse} from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/fontawesome-free-solid';

class ChapterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.setState({
          open: !(this.state.open)
        })}>
          <h4>Chapter One</h4>
        </div>
        <Collapse in={this.state.open}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

export default ChapterList;