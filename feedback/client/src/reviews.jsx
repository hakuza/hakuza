import React from "react";

export class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      id: props.id
    };
  }

  render() {
    return (
      <div className="reviewList">
        {this.state.reviews[this.state.id].map((elem, i) => {
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
