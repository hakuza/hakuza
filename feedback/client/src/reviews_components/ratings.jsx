import React from "react";

export class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      avgRating: null,
      five: null,
      four: null,
      three: null,
      two: null,
      one: null
    };
  }

  componentWillMount() {
    var totalSum = 0;
    var five = 0;
    var four = 0;
    var three = 0;
    var two = 0;
    var one = 0;
    this.state.reviews.map(elem => {
      var rating = elem.rating;
      if (Math.floor(rating) === 5) {
        five += 1;
      }
      if (Math.floor(rating) === 4) {
        four += 1;
      }
      if (Math.floor(rating) === 3) {
        three += 1;
      }
      if (Math.floor(rating) === 2) {
        two += 1;
      }
      if (Math.floor(rating) === 1) {
        one += 1;
      }
      totalSum += rating;
    });
    var avgRating = totalSum / this.state.reviews.length;
    var roundedAvgRating = Math.round(avgRating * 10) / 10;
    console.log(five, four, three, two, one);
    this.setState({
      avgRating: roundedAvgRating,
      five: five,
      four: four,
      three: three,
      two: two,
      one: one
    });
  }

  render() {
    return (
      <div className="ratings_container">
        <div className="avg_rating_container">
          <a id="avgRatingNum">{this.state.avgRating}</a>
          <a id="avgRatingText">Average Rating</a>
        </div>
        <div className="ratings_breakdown_container">
          <a className="bar">{this.state.five}</a>
          <a className="bar">{this.state.four}</a>
          <a className="bar">{this.state.three}</a>
          <a className="bar">{this.state.two}</a>
          <a className="bar">{this.state.one}</a>
        </div>
      </div>
    );
  }
}
