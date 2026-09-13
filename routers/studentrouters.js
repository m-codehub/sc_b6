const express=require("express")
const {students, create_student, create_students, 
    studento,
    studentById,
    updateo,
    updatem,
    updateById,
    deleteo,
    deletem,
    deleteById}=require("../controllers/studentcontrollers.js")
const Router=express.Router()

Router.get("/students",students)
Router.post("/create_student", create_student);
Router.post("/create_students", create_students);
Router.get("/studento", studento);
Router.get("/student/:id", studentById);
Router.put("/updateo", updateo);
Router.put("/updatem", updatem);
Router.put("/update/:id", updateById);
Router.delete("/deleteo", deleteo);
Router.delete("/deletem", deletem);
Router.delete("/delete/:id", deleteById);

module.exports={Router}