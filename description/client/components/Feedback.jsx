import React from 'react';

const Feedback = props => {
  return (
    <div>
      <h4>histogram</h4>
      <h4>{props.currentCourse.avg_rating}</h4>
      <h4>({props.currentCourse.num_reviews} ratings)</h4>
      <h4>{props.currentCourse.num_subscribers} students enrolled</h4>
    </div>
  );
};

export default Feedback;