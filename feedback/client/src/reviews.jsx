import React from "react";

export class Reviews extends React.Component {
  render() {
    return (
      <div className="reviewList">
        {props.reviews[0].reviews.map((elem, i) => {
          if (elem.content) {
            return (
              <div className="indivReviews" id={i}>
                {elem.content}
              </div>
            );
          }
        })}
      </div>
    );
  }
}
