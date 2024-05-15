import express from "express";
import JobsModel from "./jobs.model.js";
const jobsRouter = express.Router();
jobsRouter.get('/', (req, res) => {
    // Some logic to fetch or generate the jobs data
    const jobs = JobsModel.getJobs();
    res.render('jobs', { jobs: jobs });
});
jobsRouter.get('/:id', (req, res) => {
    const jobId = req.params.id;
    const job= JobsModel.getById(jobId);
   if (!job) {
    return res.status(404).send('Job not found');
}
res.render('jobs-details', { job });
});
export default jobsRouter