import express from "express";
import RecruitersModel from "../recruiters/recruiters.model.js"
import JobsModel from "../jobs/jobs.model.js";
const recruitersRouter = express.Router();
recruitersRouter.post('/register',(req,res)=>{
   const {name,email,password} = req.body;
   console.log(name,email,password);
   RecruitersModel.addRecruiter({name,email,password});
   const users= RecruitersModel.showRecruiters();
   console.log(users);
   res.status(200).render("layout",{body:null,userAuth:null})
});
recruitersRouter.post('/login',(req,res)=>{
   const {email,password}= req.body;
   let userAuth= RecruitersModel.authRecruiter(email,password);
   if(userAuth){
      req.session.user = userAuth;
      console.log(userAuth);
      const jobs =JobsModel.getJobs()
      res.status(200).render("jobs", {jobs, userAuth: req.session.user });
   }else{
      res.send("no user found please register first")
   }
});
recruitersRouter.get('/logout', (req, res) => {
   // Destroy the session
   req.session.destroy((err) => {
       if (err) {
           console.error("Error destroying session:", err);
           res.status(500).send("Internal Server Error");
       } else {
           // Redirect to the homepage or any other page after logout
           res.redirect('/');
       }
   });
});

recruitersRouter.get('/postjob',(req,res)=>{
   res.send("hey")
})



export default recruitersRouter;