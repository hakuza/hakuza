const mongoose = require('mongoose');
const request = require('request-promise');
mongoose.connect('mongodb://localhost/curriculum');

const curriculumSchema = mongoose.Schema({
  //create schema
  id: {
    type: Number,
    unique: true
  }
});

const Curriculum = mongoose.model('Curriculum', curriculumSchema);

let options = {
  url: `https://www.udemy.com/api-2.0/courses/364426/public-curriculum-items/?page_size=2000`,
  headers: {
    Authorization: 'Basic YnFuRUljaHNndUFjdk9MbHlEYUFOa2RJV1d1aXpyOWFldDRzUE5NYzpBVFRkTzB6dW5HeFB4cU' +
        'xtMWlyUWw4Q0VTTlRIaGZ2Vlh3Y3RUckR6cHNRM25zTUF0bnliTUQ2U3hYNHVSMUNQZ0tIcjUyWFdFeT' +
        'ZZendtVUZuRHFVZ3UwTVFPcFpvbjlLODZOTHcwNURha1U1bElrVTZpQ24yZmhKMkhEMlI3Nw==',
    Accept: 'application/json, text/plain, */*'
  }
};

async function getCourses() {
  let response;
  try {
    response = await request(options);
  } catch (err) {
    console.error(err);
  }
  response = JSON.parse(response);
  console.log(response)
}

getCourses();
