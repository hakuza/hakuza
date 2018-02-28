const mongoose = require('mongoose');
const Courses = require('../index.js')

const findAll = function (callback) {
  Courses.find({}, callback)
}

module.exports = findAll