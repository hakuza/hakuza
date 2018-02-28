import React from "react";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseReview: props.reviews[props.id]
    };
  }

  render() {
    return (
      <div>
        <div className="reviewList">
          {this.state.courseReview.map((elem, i) => {
            if (elem.content) {
              return (
                <div className="indivReviews" key={i}>
                  {elem.content}
                </div>
              );
            }
          })}
        </div>
        <div className="user" />
        {/* {this.state.courseReview} */}
      </div>
    );
  }
}
