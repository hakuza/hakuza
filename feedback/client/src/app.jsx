import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Reviews } from "./reviews.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      id: null
    };
  }

  componentDidMount() {
    axios
      .get("/feedback")
      .then(res => {
        const data = res.data;
        this.setState({
          reviews: data,
          id: res.data[0].courseId
        });
        console.log(this.state.reviews);
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
        <h2>Featured Review</h2>
        <h2>Student Feedback</h2>
        <h3>Reviews</h3>
        <Reviews reviews={this.state.reviews} id={this.state.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
