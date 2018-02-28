const express = require('express');
const bodyParser = require('body-parser')
const dbHelpers = require('../../db/models/helpers.js')

module.exports = {
  courses: {
    get: function (req,res) {
      dbHelpers(function (err,results){
        if (err) {
          console.log(err)	
        }	else {
        	console.log(results)
          res.send(results)	
        }
      })
    }	
  }
}