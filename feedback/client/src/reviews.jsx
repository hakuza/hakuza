import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Search } from "./reviews_components/search.jsx";
import { Ratings } from "./reviews_components/ratings.jsx";

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

  render() {
    return (
      <div>
        <h2>Student Feedback</h2>
        <Ratings reviews={this.state.courseReview} />
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
                        Rating: {elem.rating}
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
