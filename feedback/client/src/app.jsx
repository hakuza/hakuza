import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Feedback } from "./feedback.jsx";
import { Featured } from "./featured_review.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      id: 1383496
    };
  }

  componentWillMount() {
    axios
      .get("/feedback")
      .then(res => {
        const data = {};
        res.data.map(elem => {
          data[elem.courseId] = elem.reviews;
        });
        console.log(data);
        this.setState({
          reviews: data,
          id: res.data[1].courseId
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.reviews === null) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Featured reviews={this.state.reviews} id={this.state.id} />
        <Feedback reviews={this.state.reviews} id={this.state.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
