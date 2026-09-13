const {student}=require("../models/studentmodels")      
const create_student=async(req,res)=>{
    const s= await student.insertOne(req.body)
    await res.send(s)
}
const create_students=async(req,res)=>{
    const s=await student.insertMany(req.body)
    await res.send(s)}
const students=async(req,res)=>{
    const s=await student.find()
    await res.send(s)
  }
const studentt=async(req,res)=>{
    const s=await student.find(req.body)
    await res.send(s)
}
 
const studenttt=async(req,res)=>{
    const s=await student.find({_id:req.params.id})
    await res.send(s)
}
module.exports={create_student,create_students,students,studentt,studenttt}