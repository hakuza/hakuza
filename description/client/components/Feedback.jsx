import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const Feedback = props => {
  let rating = props.currentCourse.avg_rating || 0;
  let filledStars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    filledStars.push(
      <FontAwesomeIcon key={i} icon={faStar} className="star" />
    );
  }
  for (let i = 0; i < 5 - Math.floor(rating); i++) {
    filledStars.push(<FontAwesomeIcon key={i + rating} icon={faStar} />);
  }
  return (
    <div id="container_feedback">
      <h4 className="row_items">{filledStars.map(star => star)}</h4>
      <h4 className="row_items">{props.currentCourse.avg_rating}</h4>
      <h4 className="row_items">({props.currentCourse.num_reviews} ratings)</h4>
      <h4 className="row_items">
        {props.currentCourse.num_subscribers} students enrolled
      </h4>
    </div>
  );
};

export default Feedback;
