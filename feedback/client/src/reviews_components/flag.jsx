import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/fontawesome-free-solid";

export class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
      yesClicked: false,
      noClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("clicked");
    console.log(this.state.yesClicked);
    if (e === "yes") {
      this.setState({
        yesClicked: !this.state.yesClicked
      });
    }
    if (e === "no") {
      this.setState({
        noClicked: !this.state.noClicked
      });
    }
  }

  render() {
    return (
      <div className="flag_container">
        <div className="question">Was this review helpful?</div>
        <div className="yes" onClick={() => this.handleClick("yes")}>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className="no" onClick={() => this.handleClick("no")}>
          <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <div className="report">Report</div>
        {this.state.yesClicked || this.state.noClicked ? (
          <div className="message">
            Thank you! You have successfully submitted feedback for this review.
          </div>
        ) : null}
      </div>
    );
  }
}
