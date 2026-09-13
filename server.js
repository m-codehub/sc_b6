const express=require("express")
const mongoose=require("mongoose")
const app=express()
const {student}=require("./models/studentmodels")
const {create_student,create_students,students,studentt,studenttt}=require("./controllers/studentcontrollers")  


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/csec_students")
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log(`error is ${e}`)
})

app.post("/create_student",create_student)
app.post("/create_students",create_students)

app.get("/students",students)

app.get("/studentt",studentt)

app.get("/studenttt/:id",studenttt)

app.put("/updateo",async(req,res)=>{
    const s=await student.updateOne({name:req.body.name},
                                    {$set:{city:req.body.city}}) 
                                    
    await res.send(s)
})

app.put("/updatem",async(req,res)=>{
    const s=await student.updateMany({course:req.body.course},
                                    {$set:{gender:req.body.g}}
    )
    await res.send(s)
})
app.put("/update/:id",async(req,res)=>{
    const s=await student.updateOne({_id:req.params.id},
                                    {$set:{course:req.body.course}}
    )
    await res.send(s)
})


app.delete("/deleteo",async(req,res)=>{
    const s=await student.deleteOne({name:req.body.name})
    await res.send(s)
})
app.delete("/deletem",async(req,res)=>{
    const s=await student.deleteMany({name:req.body.name})
    await res.send(s)
})

app.delete("/delete/:id",async(req,res)=>{
    const s=await student.deleteOne({_id:req.params.id})
    await res.send(s)
})

const port=7777
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`)
})