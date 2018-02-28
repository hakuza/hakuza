const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controllers/courses.js')

const router = express.Router();
router.get('/',controller.courses.get)

module.exports = router