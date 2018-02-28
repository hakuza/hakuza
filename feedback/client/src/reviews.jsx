import React from "react";
import { Picture } from "./reviews_components/picture.jsx";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id],
      searchResults: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    // loop through the reviews for (key in obj)
    if (e.key === "Enter") {
      var filteredReviews = this.state.courseReview.filter(review => {
        if (review.content) {
          var target = e.target.value.toLowerCase();
          var content = review.content.toLowerCase();
          return content.match(target);
        }
      });
      this.setState({
        searchResults: filteredReviews
      });
      // if the content matches the target then return filtered array
      // set the state = filtered list
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Reviews</h3>
        <input
          type="text"
          className="searchField"
          onKeyUp={this.handleSearch}
          placeholder="Search in Reviews"
        />
        <a className="searchButton">Search</a>
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
    );
  }
}
