<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> feature

const Feedback = props => {
  return (
    <div>
      <h4>histogram</h4>
<<<<<<< HEAD
<<<<<<< HEAD
      <h4>{console.log(props)}</h4>
      <h4>{props.currentCourse.avg_rating}</h4>
      <h4>{props.currentCourse.num_subscribers}</h4>
=======
      <h4>5 stars</h4>
      <h4>ratings number</h4>
      <h4>students enrolled</h4>
>>>>>>> feature
=======
      <h4>{props.currentCourse.avg_rating}</h4>
      <h4>({props.currentCourse.num_reviews} ratings)</h4>
      <h4>{props.currentCourse.num_subscribers} students enrolled</h4>
>>>>>>> master
    </div>
  );
};

export default Feedback;
