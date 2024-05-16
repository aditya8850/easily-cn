import express from "express";
import JobsModel from "./jobs.model.js";
import upload from "../../middlewares/multer.resume.js";
import emailMiddleware from "../../middlewares/nodemailer.js";

const jobsRouter = express.Router();
// Route to get all jobs
jobsRouter.get('/', (req, res) => {
    const jobs = JobsModel.getJobs();
    const userAuth = req.session.user;
    res.render('jobs', { jobs, userAuth });
});

// Route to get job details by ID
jobsRouter.get('/:id', (req, res) => {
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);
    
    if (!job) {
        return res.status(404).send('Job Not Found');
    }

    const result = job.getTotalApplicants();
    res.render('jobs-details', { job, result, appliedStatus: null, userAuth: req.session.user });
});

// Route to apply for a job
jobsRouter.post('/:id/apply', upload.single('file'), (req, res, next) => {
    const { name, email, phone } = req.body;
    const file = req.file;
    const jobId = req.params.id;
    const job = JobsModel.getById(jobId);

    if (!job) {
        return res.status(404).send('Job Not Found');
    }

    job.addApplicantDb({ name, email, phone, file });
    const result = job.getTotalApplicants();
    
    // Pass job and result to the next middleware
    req.job = job;
    req.result = result;
    next();
}, emailMiddleware, (req, res) => {
    const job = req.job;
    const result = req.result;
    res.render('jobs-details', { job, result, appliedStatus: true, userAuth: req.session.user });
});
jobsRouter.post('/:id/delete', (req, res) => {
    const jobId = req.params.id;
    // Call the method to delete the job by ID from your data store
    // For example:
    JobsModel.deleteJobById(jobId);
    // Redirect back to the jobs list or any other appropriate page
    res.redirect('/jobs');
});
export default jobsRouter;
