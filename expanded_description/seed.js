const mongoose = require('mongoose');
const request = require('request-promise');
mongoose.connect('mongodb://localhost/udemy');

const udemySchema = mongoose.Schema({
  //create schema
  id: {
    type: Number,
    unique: true
  },
  name: String,
  title: String,
  price: String,
  headline: String,
  num_subscribers: Number,
  avg_rating: String,
  num_lectures: Number,
  created: Date,
  num_reviews: Number,
  description: String
});

const Udemy = mongoose.model('Udemy', udemySchema);
// url:
// `https://www.udemy.com/api-2.0/courses/?page_size=200&search=javascript&field
// s
// [course]=title,headline,num_lectures,num_subscribers,created,visible_instruct
// o rs,avg_rating,price,num_reviews,description&ordering=relevance`,
let options = {
  url: 'https://www.udemy.com/api-2.0/courses/364426/?fields[course]=title,headline,num_' +
      'lectures,num_subscribers,created,visible_instructors,avg_rating,price,num_review' +
      's,description',
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
  // for (var i = 0; i < response.results.length; i++) {   let currentCourse =
  // response.results[i];   let document = {     id: currentCourse.id,     //
  // name: currentCourse.visible_instructors[0].title, title: currentCourse.title,
  //     // headline: currentCourse.headline, avg_rating:
  // currentCourse.avg_rating,     // price: currentCourse.price, num_subscribers:
  // currentCourse.num_subscribers,     // num_lectures:
  // currentCourse.num_lectures, num_reviews:     // currentCourse.num_reviews,
  // created: currentCourse.created description:     // currentCourse.description
  // };   console.log(document) let obj = new Udemy(document); try {   await
  // obj.save(); } catch (err) { console.error(err); } console.log(obj);
}
// }

getCourses().then(() => Udemy.find((err, results) => {
  if (err) 
    console.log(err);
  else 
    console.log('results');
  }
));
