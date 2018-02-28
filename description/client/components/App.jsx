<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import Feedback from './Feedback.jsx';
=======
import React from "react";
import axios from "axios";
import Feedback from "./Feedback.jsx";
>>>>>>> feature

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      course: [],
      currentCourse: ''
    };
  }

  componentWillMount() {
    axios.get('/description').then(response => {
      this.setState({
        course: response.data,
        currentCourse: response.data[16]
=======
      course: {}
    };
  }

  componentDidMount() {
    axios.get("/description").then(response => {
      this.setState({
        course: response.data
>>>>>>> feature
      });
    });
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>{this.state.currentCourse.title}</h1>
        <h2>{this.state.currentCourse.headline}</h2>
        <Feedback currentCourse={this.state.currentCourse} />
        <h4>{this.state.currentCourse.name}</h4>
        <h4>{new Date(this.state.currentCourse.created).toDateString()}</h4>
        <h4>English</h4>
=======
        <h1>Title Goes Here</h1>
        <h2>Headline goes here</h2>
        <Feedback />
        <h4>Created by ....</h4>
        <h4>Last Updated</h4>
        <h4>Language</h4>
>>>>>>> feature
        <h4>Closed captioning</h4>
      </div>
    );
  }
}
