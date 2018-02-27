import React from "react";
import axios from "axios";
import Feedback from "./Feedback.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {}
    };
  }

  componentDidMount() {
    axios.get("/description").then(response => {
      this.setState({
        course: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Title Goes Here</h1>
        <h2>Headline goes here</h2>
        <Feedback />
        <h4>Created by ....</h4>
        <h4>Last Updated</h4>
        <h4>Language</h4>
        <h4>Closed captioning</h4>
      </div>
    );
  }
}
