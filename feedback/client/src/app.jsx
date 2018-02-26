import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export class App extends React.Component {
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
    return <div />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
