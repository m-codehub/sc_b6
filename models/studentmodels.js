const mongoose=require("mongoose")
const studentSchema=mongoose.Schema({
    name:"String",
    age:"Number",
    gender:"String",
    course:"String",
    year:"String",
    marks:"Number",
    city:"String",
    email:"String"
})

const student=mongoose.model("students",studentSchema)
module.exports={student}