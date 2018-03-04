import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/fontawesome-free-solid';
import faker from 'faker';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  componentDidMount() {
    axios
      .get('/load')
      .then(response => this.setState({description: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="container">
        <div className="what_you_get">
          <h3>What will I Learn?</h3>
          <div id="columnHolder">
            <div id="column1">
              <ul className="what_you_get_items">
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/></span>
                  {faker
                    .lorem
                    .sentence()}</li>
              </ul>
            </div>
            <div id="coloumn2">
              <ul className="what_you_get_items">
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/>
                  </span>{faker
                    .lorem
                    .sentence()}
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/></span>{faker
                    .lorem
                    .sentence()}
                </li>
                <li>
                  <span><FontAwesomeIcon icon={faCheck}/>
                  </span>{faker
                    .lorem
                    .sentence()}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3>Requirements</h3>
        <ul>
          <li>Basic computer skills</li>
          <li>Ability to install software on your computer</li>
          <li>Admin rights might be required for software installation</li>
        </ul>
        <h3>Description</h3>
        {ReactHtmlParser(this.state.description)}
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));