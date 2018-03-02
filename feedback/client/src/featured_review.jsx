import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Ratings } from "./reviews_components/ratings.jsx";
import StarRatings from "react-star-ratings";

export class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews[props.id]
    };
  }

  componentWillMount() {
    var fiveStarReviews = this.state.reviews.filter(review => {
      return review.content.length > 80 && review.rating === 5;
    });
    console.log(fiveStarReviews.length);
    var index = Math.floor(Math.random() * fiveStarReviews.length);
    this.setState({
      reviews: fiveStarReviews[index]
    });
  }

  render() {
    return (
      <div>
        <div className="title">Featured Review</div>
        <div className="indivContainer">
          <Picture name={this.state.reviews.user.display_name} />
          <div className="user">
            <div className="time">{this.state.reviews.created}</div>
            {this.state.reviews.user.display_name}
          </div>
          <div className="indivReviews">
            <div className="indivRating">
              <StarRatings
                rating={this.state.reviews.rating}
                starRatedColor="#f4c150"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="1px"
              />
            </div>
            {this.state.reviews.content}
          </div>
        </div>
      </div>
    );
  }
}
