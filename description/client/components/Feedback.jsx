import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';

const Feedback = props => {
  return (
    <div>
      <h4>
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </h4>
      <h4>{props.currentCourse.avg_rating}</h4>
      <h4>({props.currentCourse.num_reviews} ratings)</h4>
      <h4>{props.currentCourse.num_subscribers} students enrolled</h4>
    </div>
  );
};

export default Feedback;