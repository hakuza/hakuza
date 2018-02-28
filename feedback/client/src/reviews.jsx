import React from "react";
import { Picture } from "./reviews_components/picture.jsx";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="userList">
          {this.state.courseReview.map((elem, i) => {
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
