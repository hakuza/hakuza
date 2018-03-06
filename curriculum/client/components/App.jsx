import React from 'react';
import axios from 'axios';
import ChapterList from './ChapterList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="container">
        <h2>Curriculum For This Course</h2>
        <h5>Expand All</h5>
        <h5>46 Lectures</h5>
        <h5>05:04:18</h5>
        <ChapterList/>
      </div>
    );
  }
}
