import React from "react";
import { Picture } from "./reviews_components/picture.jsx";
import { Search } from "./reviews_components/search.jsx";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id],
      searchResults: props.reviews[props.id]
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    if (e.key === "Enter") {
      var filteredReviews = this.state.courseReview.filter(review => {
        if (review.content) {
          var target = e.target.value.toLowerCase();
          var content = review.content.toLowerCase();
          var author = review.user.display_name.toLowerCase();
          return content.match(target) || author.match(target); //returns matches with author or content
        }
      });
      this.setState({
        searchResults: filteredReviews
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Search search={this.handleSearch} />
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
