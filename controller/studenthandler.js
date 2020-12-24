const Student = require('../models/studentModel')

const addstudent = (req,res) =>{
    let student = new Student({
        fname:req.body.fname,
        lname:req.body.lname,
        fathername:req.body.fathername,
        branch:req.body.branch,
        college:req.body.college,
        email:req.body.email,
        mobile:req.body.mobile,
        address:req.body.address
    })

    student.save((err,saved)=>{
        if(err){
            return res.status(400).json({
                message:"Data not uploaded",
                err
            })
        }
        else{
            return res.status(200).json({
                message:"Data uploaded",
                saved
            })
        }
    })
}


module.exports = addstudent