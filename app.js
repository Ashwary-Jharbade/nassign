// module imports 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// router import
const createstudent = require('./mountpath/studentrouter')

// express app setup
app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

// mongo atlas url
const uri = "";

//mongoo connection and specification
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
  useCreateIndex:true
})
.then(() => {
  console.log("MongoDB Connected…")
}).catch(err => console.log(err))

app.use('/student',createstudent)

app.get('/',(req,res)=>{
    res.send("<h1>MEN Application</h1>")
})

// starting engine on port 3000 
app.listen(3000,()=>{
    console.log("Express App Started at port 3000")
})