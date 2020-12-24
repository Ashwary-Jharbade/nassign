const Student = require('../models/studentModel')
const showstudent = async (req,res)=>{
    data = await Student.find()
    res.send(data)
}

module.exports = showstudent