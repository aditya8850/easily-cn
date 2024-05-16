import express from "express";
import JobsModel from "./jobs.model.js";
import upload from "../../middlewares/multer.resume.js";
const jobsRouter = express.Router();
jobsRouter.get('/', (req, res) => {
    // Some logic to fetch or generate the jobs data
    const jobs = JobsModel.getJobs();
    const userAuth = req.session.user ? true : false;
    res.render('jobs', { jobs, userAuth: req.session.user });
});
jobsRouter.get('/:id', (req, res) => {
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);
    const result= job.getTotalApplicants()
    if (!job) {
        return res.status(404).send('Job not found');
    }
    res.render('jobs-details', { job,result,appliedStatus:null,userAuth:null});
});
jobsRouter.post('/:id/apply', upload.single('file'), (req, res, next) => {
    const { name, email, phone } = req.body;
    const file = req.file;
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);
    if (!job) {
        return res.status(404).send('Job not found');
    }
    job.addApplicantDb({ name, email, phone, file });
    const result = job.getTotalApplicants();
    res.render('jobs-details', { job, result, appliedStatus: true ,userAuth:null});
});

export default jobsRouter