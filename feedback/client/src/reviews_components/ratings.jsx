import React from "react";

export class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      avgRating: null
    };
  }

  componentWillMount() {
    var total = 0;
    this.state.reviews.map(elem => {
      total += elem.rating;
    });
    var avgRating = total / this.state.reviews.length;
    var roundedAvgRating = Math.round(avgRating * 10) / 10;
    this.setState({
      avgRating: roundedAvgRating
    });
  }

  render() {
    return (
      <div>
        <h2>Student Feedback</h2>
        <div id="avgRatingContainer">
          <a id="avgRatingNum">{this.state.avgRating}</a>
          <br />
          <a id="avgRatingText">Average Rating</a>
        </div>
      </div>
    );
  }
}
