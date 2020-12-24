const express = require('express')
const studenthandler = require('../controller/studenthandler')
const showstudenthandler = require('../controller/getstudenthandler')
const studentrouter = express.Router()

studentrouter.post('/student',studenthandler)
studentrouter.post('/showstudents',showstudenthandler)

module.exports = studentrouter 