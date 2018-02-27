import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './components/courseList.jsx';
import dbHelper from './dbHelper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    dbHelper
      .get(12)
      .then(response => {
        let similarCourses = response.data.map(obj => obj.course2_id);
        this.setState({
          courses: similarCourses,
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Compare to Other Python Courses</h3>
        <CourseList courses={this.state.courses} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
