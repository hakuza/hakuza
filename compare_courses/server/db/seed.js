const mysql = require('mysql');
const rp = require('request-promise');
const db = require('./index.js');
const queryCreator = require('../models/query.js');
// const request = require('request');
// var Promise = require('bluebird');

// const connection = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'compare'
// });

// const url = 'https://www.udemy.com/api-2.0/courses/?page_size=200&search=programming&ordering=most-reviewed&fields[course]=title,avg_rating,num_subscribers,created,price,num_reviews,description,image_125_H,url';
const url = 'https://www.udemy.com/api-2.0/courses/';

let options = {
  url: url,
  headers: {
    Authorization: 
      'Basic Z2VzQmVZMWlDOWtNSXNZSFZTZGJtYXZ0ZmpJbFFOOWFtaFV3MFZCWjpuOWRxMkRRUFZRSEp3YWZnblBoY1NQWXhIZHJsT2VUUDZTV3VmTUNPcWFCa2k3NnY0THlETlZQUFlYcmRzUDZNS2MxWGxQSjZ4SjVicExjYXRWdUx5OUF3UWZIWUZWWXBxdjFiTWRldVIwdFZSSFJnUG9RRmYya01sRFRGaWNVNw==',
    Accept: 'application/json, text/plain, */*',
  },
  qs: {
    page_size: 200,
    search: 'programming',
    ordering: 'most-reviewed',
    'fields[course]': 'title,avg_rating,num_subscribers,created,price,num_reviews,description,image_125_H,url'
  }
};

rp(options)
  .then(body => {
    // console.log(body);
    body = JSON.parse(body);
    let options2 = {
      url: body.next,
      headers: options.headers
    }
    return Promise.all([rp(options2), body.results]);
  })
  .then(([body2, results]) => {
    results = [...results, ...JSON.parse(body2).results]
    console.log(`Got ${results.length} results`);
    console.log(queryCreator.insert(results[0]));
    let inserts = results.map(item => db.query(queryCreator.insert(item)));
    return Promise.all(inserts);
  })
  .then(dbResponse => {
    console.log(typeof dbResponse);
  })
  .catch(err => {
    throw err
  });