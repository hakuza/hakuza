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
  num_reviews: Number
});

module.exports = mongoose.model('Udemy', udemySchema);
