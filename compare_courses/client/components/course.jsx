import React from 'react';
import _ from 'lodash';

function Course({ course }) {
  return (
    <div className="course">
      <img className="thumbnail" src={course.thumbnail_url} />
      <div className="course-info">
        <div className="title">
          <div className="course-title">{_.unescape(course.title)}</div>
          <div className="updated-at">
            Updated {new Date(course.updated_at).toDateString()}
          </div>
        </div>
        <div className="details">
          <div className="rating">{course.avg_rating}</div>
          <div className="num-subs">{course.num_subs}</div>
          <div className="price">{course.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
