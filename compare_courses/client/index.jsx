import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './components/courseList.jsx';
import serverHelper from './serverHelper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    serverHelper
      .get(12)
      .then(response => {
        console.log(response.data);
        let similarCourses = response.data.map(obj => obj[0]);
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
