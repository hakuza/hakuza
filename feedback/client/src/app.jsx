import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: true
    };
  }

  componentDidMount() {
    axios
      .get("/feedback")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>Student Feedback</h3>
        <h3>Reviews</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
