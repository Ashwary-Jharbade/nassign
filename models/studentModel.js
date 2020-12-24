const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname:{
        type:String,
        maxlength:50
    },
    lname:{
        type:String,
        maxlength:50
    },
    fathername:{
        type:String,
        maxlength:50
    },
    branch:{
        type:String,
        maxlength:50
    },
    college:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:Number,
        unique:true
    },
    address:{
        type:String,
        maxlength:50
    },
})

const studentmodel = mongoose.model('student',studentSchema)

module.exports = studentmodel