import React from 'react';
import axios from 'axios';
import Feedback from './Feedback.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: [],
      currentCourse: {}
    };
  }

  componentWillMount() {
    axios
      .get('/description')
      .then(response => {
        this.setState({
          course: response.data,
          currentCourse: response.data[16]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.currentCourse.title}</h1>
        <h2>{this.state.currentCourse.headline}</h2>
        <Feedback currentCourse={this.state.currentCourse} />
        <h4>Created by {this.state.currentCourse.name}</h4>
        <h4>
          Last Updated{' '}
          {new Date(this.state.currentCourse.created).toDateString()}
        </h4>
        <h4>English</h4>
        <h4>Closed captioning</h4>
      </div>
    );
  }
}
