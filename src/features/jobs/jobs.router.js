import express from "express";
import JobsModel from "./jobs.model.js";
import upload from "../../middlewares/multer.resume.js";
const jobsRouter = express.Router();
jobsRouter.get('/', (req, res) => {
    // Some logic to fetch or generate the jobs data
    const jobs = JobsModel.getJobs();
    res.render('jobs', { jobs: jobs });
});
jobsRouter.get('/:id', (req, res) => {
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);
    const result= JobsModel.getTotalApplicants()
    if (!job) {
        return res.status(404).send('Job not found');
    }
    res.render('jobs-details', { job,result});
});
jobsRouter.post('/:id/apply',upload.single('file'),(req,res,next)=>{
    const {name,email,phone}= req.body;
    const file= req.file;
    const applicant= JobsModel.addApplicantDb({name,email,phone,file})
    const result= JobsModel.getTotalApplicants()
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);
    res.render('jobs-details',{job,result})
})
export default jobsRouter