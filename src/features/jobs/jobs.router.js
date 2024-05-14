import express from "express";
import JobsModel from "./jobs.model.js";
const jobsRouter = express.Router();
jobsRouter.get('/', (req, res) => {
    // Some logic to fetch or generate the jobs data
    const jobs = JobsModel.getJobs();
    console.log(jobs);

    res.render('jobs', { jobs: jobs });

});
export default jobsRouter