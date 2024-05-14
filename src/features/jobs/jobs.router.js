import express from "express";
import JobsModel from "./jobs.model.js";
 const jobsRouter = express.Router();
 jobsRouter.get('/',(req,res)=>{
    const jobs= JobsModel.getJobs()
    res.render('jobs',{jobs:jobs,
        err:!jobs
    })
 })
 export default jobsRouter