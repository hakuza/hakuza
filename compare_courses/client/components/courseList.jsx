import React from 'react';
import Course from './course.jsx';
import {Collapse} from 'react-collapse';

export default class CourseList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 515,
      expanded: false,
    }
    this.accordian = this.accordian.bind(this);
  }

  accordian() {
    let expanded = !this.state.expanded;
    this.setState({
      height: expanded ? 1115 : 515,
      expanded: expanded,
    });
    // console.log(this.state);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.accordian}>Show More</button>
        <Collapse isOpened={true} fixedHeight={this.state.height}>
          <div className="course-list">
            {this.props.courses.map(course => (
              <Course key={course.id} course={course} onclick={this.props.onclick} />
            ))}
          </div>
        </Collapse>
      </div>
    );
  }
}

// export default CourseList;
