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
  render() {
    return <div />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
