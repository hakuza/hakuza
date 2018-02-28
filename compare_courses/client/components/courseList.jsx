import React from 'react';
import Course from './course.jsx';

function CourseList({ courses, onclick }) {
  return (
    <div className="course-list">
      {courses.map(course => (
        <Course key={course.id} course={course} onclick={onclick} />
      ))}
    </div>
  );
}

export default CourseList;
