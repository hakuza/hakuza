import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

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
      <div>
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