import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Search } from "./reviews_components/search.jsx";
import { Ratings } from "./reviews_components/ratings.jsx";
import StarRatings from "react-star-ratings";

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id],
      searchResults: props.reviews[props.id],
      input: "",
      header: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStarsClick = this.handleStarsClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value.toLowerCase()
    });
  }

  handleSearch(e) {
    if (e.key === "Enter" || e.type === "click") {
      this.setState({
        header: e.target.value || this.state.input
      });
      var filteredReviews = this.state.courseReview.filter(review => {
        if (review.content) {
          var input = this.state.input;
          var target = e.target.value.toLowerCase();
          var content = review.content.toLowerCase();
          var author = review.user.display_name.toLowerCase();
          return (
            content.match(target || input) || author.match(target || input)
          );
        }
      });
      this.setState({
        searchResults: filteredReviews
      });
    }
  }

  // clicking doesn't work right now, it is saying this.state is undefined. fix.
  handleStarsClick(e) {
    console.log(e);
    var filteredStarsReviews = this.state.searchResults.filter(review => {
      var rating = Math.floor(review.rating);
      return rating === e;
    });
    this.setState({
      searchResults: filteredStarsReviews
    });
  }

  render() {
    return (
      <div>
        <div className="title">Student Feedback</div>
        <Ratings
          reviews={this.state.courseReview}
          click={this.handleStarsClick}
        />
        <div className="reviews_container">
          <Search
            search={this.handleSearch}
            header={this.state.header}
            change={this.handleChange}
          />
          <div className="userList">
            {this.state.searchResults.map((elem, i) => {
              if (elem.content) {
                return (
                  <div className="indivContainer" key={i}>
                    <Picture name={elem.user.display_name} />
                    <div className="user" key={i + 1}>
                      <div className="time" key={i + 2}>
                        {elem.created}
                      </div>
                      {elem.user.display_name}
                    </div>
                    <div className="indivReviews" key={i + 3}>
                      <div className="indivRating" key={i + 4}>
                        <StarRatings
                          rating={elem.rating}
                          starRatedColor="#f4c150"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </div>
                      {elem.content}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
