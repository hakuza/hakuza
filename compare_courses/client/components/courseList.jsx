import React from 'react';
import Course from './course.jsx';

// export default class CourseList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>Courses</div>;
//   }
// }

function CourseList({ courses }) {
  return (
    <div className="courseList">
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  );
}

export default CourseList;
