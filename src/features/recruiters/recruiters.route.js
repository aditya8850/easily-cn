import express from "express";
import RecruitersModel from "../recruiters/recruiters.model.js"
import JobsModel from "../jobs/jobs.model.js";
import upload from "../../middlewares/multer.resume.js";
const recruitersRouter = express.Router();
recruitersRouter.post('/register',(req,res)=>{
   const {name,email,password} = req.body;
   RecruitersModel.addRecruiter({name,email,password});
   const users= RecruitersModel.showRecruiters();
   res.status(200).render("layout",{body:null,userAuth:null})
});
recruitersRouter.post('/login',(req,res)=>{
   const {email,password}= req.body;
   let userAuth= RecruitersModel.authRecruiter(email,password);
   if(userAuth){
      req.session.user = userAuth;
      const jobs =JobsModel.getJobs()
      res.status(200).render("jobs", {jobs, userAuth: req.session.user });
   }else{
      res.send("no user found please register first")
   }
});
recruitersRouter.get("/:id/edit",(req,res)=>{
   const id = req.params.id;
   const jobById= JobsModel.getById(id);
   res.render('job-edits',{jobById,userAuth:req.session.user})
   
});
recruitersRouter.post('/:id/edit',(req,res)=>{
   const id= req.params.id;
   const{name,profile,role,location,salary,date,openings,skills}=req.body;
   const updatedJobDetails = {
      name,
      profile,
      role,
      location,
      salary,
      applyDate: new Date(date), // Assuming 'date' is in the format YYYY-MM-DD
      openings,
      skills
  };
  // Call the updateJob method to update the job
  
  const updatedJob = JobsModel.updateJob(id, updatedJobDetails);
  const jobs= JobsModel.getJobs()
  res.render('jobs',{jobs,userAuth: req.session.user,})

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

recruitersRouter.get('/postJob', (req, res) => {
   // Assuming you have a form with fields like jobTitle, jobDescription, etc.
   res.render("post-new-job",{userAuth:req.session.user})
});
recruitersRouter.post('/postJob',(req,res)=>{
   const { name, profile, role, location, salary, date, openings, skills } = req.body;
   // Create a new job object with the submitted data
   const newJob = {
       // You'll need to implement a function to generate a unique ID
      name,
      profile,
      role,
      location,
      salary,
      applyDate: new Date(date), // Assuming 'date' is in the format YYYY-MM-DD
      openings,
      skills
  };

  // Add the new job to your database or array
  const newJob1= JobsModel.addNewJob(newJob);
  res.redirect('/jobs');
})




export default recruitersRouter;