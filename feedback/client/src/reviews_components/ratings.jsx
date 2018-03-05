import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faStar from "@fortawesome/fontawesome-free-solid/faStar";
import StarRatings from "react-star-ratings";

export class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      // stars: null,
      avgRating: null,
      five: {
        width: null
      },
      four: {
        width: null
      },
      three: {
        width: null
      },
      two: {
        width: null
      },
      one: {
        width: null
      }
    };
  }

  componentWillMount() {
    // var stars = [];
    // for (var i = 0; i < 5; i++) {
    //   stars.push(<FontAwesomeIcon icon={faStar} className="star" />);
    // }
    var totalSum = 0;
    var totalNumRatings = 0;
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
      totalNumRatings += 1;
    });
    var avgRating = totalSum / this.state.reviews.length;
    var roundedAvgRating = Math.round(avgRating * 10) / 10;
    this.setState({
      avgRating: roundedAvgRating,
      five: {
        width: `${Math.round(five / totalNumRatings * 100)}%`
      },
      four: {
        width: `${Math.round(four / totalNumRatings * 100)}%`
      },
      three: {
        width: `${Math.round(three / totalNumRatings * 100)}%`
      },
      two: {
        width: `${Math.round(two / totalNumRatings * 100)}%`
      },
      one: {
        width: `${Math.round(one / totalNumRatings * 100)}%`
      }
    });
  }

  render() {
    return (
      <div className="ratings_container">
        <div className="avg_rating_container">
          <a id="avgRatingNum">{this.state.avgRating}</a>
          <StarRatings
            rating={this.state.avgRating}
            starRatedColor="#f4c150"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
          <a id="avgRatingText">Average Rating</a>
        </div>
        <div className="ratings_breakdown_container">
          <div
            className="indiv_rating_container"
            id={5}
            onClick={() => this.props.click(5)}
          >
            <div className="bar" id="fiveBar">
              <span className="fill" id="fiveFill" style={this.state.five} />
            </div>
            <StarRatings
              rating={5}
              starRatedColor="#f4c150"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />
            <a className="percent" id="fivePercent">
              {this.state.five.width}
            </a>
          </div>
          <div
            className="indiv_rating_container"
            id={4}
            onClick={() => this.props.click(4)}
          >
            <div className="bar" id="fourBar">
              <span className="fill" id="fourFill" style={this.state.four} />
            </div>
            <StarRatings
              rating={4}
              starRatedColor="#f4c150"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />
            <a className="percent" id="fourPercent">
              {this.state.four.width}
            </a>
          </div>
          <div
            className="indiv_rating_container"
            id={3}
            onClick={() => this.props.click(3)}
          >
            <div className="bar" id="threeBar">
              <span className="fill" id="threeFill" style={this.state.three} />
            </div>
            <StarRatings
              rating={3}
              starRatedColor="#f4c150"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />
            <a className="percent" id="threePercent">
              {this.state.three.width}
            </a>
          </div>
          <div
            className="indiv_rating_container"
            id={2}
            onClick={() => this.props.click(2)}
          >
            <div className="bar" id="twoBar">
              <span className="fill" id="twoFill" style={this.state.two} />
            </div>
            <StarRatings
              rating={2}
              starRatedColor="#f4c150"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />
            <a className="percent" id="twoPercent">
              {this.state.two.width}
            </a>
          </div>
          <div
            className="indiv_rating_container"
            id={1}
            onClick={() => this.props.click(1)}
          >
            <div className="bar" id="oneBar">
              <span className="fill" id="oneFill" style={this.state.one} />
            </div>
            <StarRatings
              rating={1}
              starRatedColor="#f4c150"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />
            <a className="percent" id="onePercent">
              {this.state.one.width}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
