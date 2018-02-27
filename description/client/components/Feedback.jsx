import React from 'react';

const Feedback = props => {
  return (
    <div>
      <h4>histogram</h4>
      <h4>{console.log(props)}</h4>
      <h4>{props.currentCourse.avg_rating}</h4>
      <h4>{props.currentCourse.num_subscribers}</h4>
    </div>
  );
};

export default Feedback;
