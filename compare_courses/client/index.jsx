import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './components/courseList.jsx';
import serverHelper from './serverHelper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currId: undefined,
      courses: [],
    };
  }

  getCourses(id) {
    // console.log(id);
    serverHelper
      .get(id)
      .then(response => {
        // console.log(response.data);
        let similarCourses = response.data.map(obj => obj[0]);
        this.setState({
          currId: id,
          courses: similarCourses,
        });
      })
      .catch(err => {
        throw err;
      });
  }

  componentWillMount() {
    this.getCourses(11);
  }

  render() {
    return (
      <div className="container">
        <div className="compare-header">
          Compare to Other Programming Courses
        </div>
        <CourseList
          courses={this.state.courses}
          onclick={this.getCourses.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
