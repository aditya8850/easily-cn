import express from "express";
import RecruitersModel from "../recruiters/recruiters.model.js"
const recruitersRouter = express.Router();
recruitersRouter.post('/register',(req,res)=>{
   const {name,email,password} = req.body;
   console.log(name,email,password);
   RecruitersModel.addRecruiter({name,email,password});
   const users= RecruitersModel.showRecruiters();
   res.send(users)
   
})



export default recruitersRouter;