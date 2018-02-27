import React from 'react';
import _ from 'lodash';

function Course({ course }) {
  return (
    <div className="course">
      <img className="thumbnail" src={course.thumbnail_url} />
      <div className="courseTitle">{_.unescape(course.title)}</div>
      <div className="updatedAt">
        {new Date(course.updated_at).toDateString()}
      </div>
      <div className="rating">{course.avg_rating}</div>
      <div className="numSubs">{course.num_subs}</div>
      <div className="price">{course.price}</div>
    </div>
  );
}

export default Course;
