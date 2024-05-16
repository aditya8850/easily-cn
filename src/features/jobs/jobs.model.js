export default class JobsModel {
    constructor(id, name, profile, role, location, salary, applyDate, openings, skills) {
        this.id = id;
        this.name = name;
        this.profile = profile;
        this.role = role;
        this.location = location;
        this.salary = salary;
        this.applyDate = applyDate;
        this.openings = openings;
        this.skills = skills;
        this.applicants = [];
    }

    // Get all jobs
    static getJobs() {
        return jobs;
    }

    // Get job by ID
    static getById(id) {
        const job = jobs.find((j) => j.id == id);
        return job;
    }

    // Add an applicant to the job
    addApplicantDb({ name, email, phone, file }) {
        let applicantData = { name, email, phone, file };
        this.applicants.push(applicantData);
        return this.applicants;
    }

    // Get total number of applicants
    getTotalApplicants() {
        return this.applicants.length;
    }

    // Add a new job
    static addNewJob(job) {
        const id = jobs.length + 1; // Generating a unique ID
        job.id = id; // Adding the ID to the job object
        // Creating a new job instance
        job = new JobsModel(job.id, job.name, job.profile, job.role, job.location, job.salary, job.applyDate, job.openings, job.skills);
        jobs.push(job);
    }

    // Update an existing job
    static updateJob(id, updatedJobDetails) {
        const jobViaIndex = jobs.find(job => job.id == id);
        if (jobViaIndex) {
            // Iterate over the keys of updatedJobDetails
            for (const key in updatedJobDetails) {
                // Check if the key exists in jobViaIndex
                if (key in jobViaIndex) {
                    // Update the property with the value from updatedJobDetails
                    jobViaIndex[key] = updatedJobDetails[key];
                }
            }
            return jobViaIndex; // Return the updated job
        } else {
            return null; // Return null if job is not found
        }
    }

    // Search jobs based on query
    static searchJobs(query) {
        const lowerCaseQuery = query.toLowerCase();
        return jobs.filter(job => 
            job.name.toLowerCase().includes(lowerCaseQuery) ||
            job.profile.toLowerCase().includes(lowerCaseQuery) ||
            job.role.toLowerCase().includes(lowerCaseQuery)
        );
    }
    static deleteJobById(id) {
        const index = jobs.findIndex(job => job.id == id);
        if (index !== -1) {
            // Remove the job from the array if found
            jobs.splice(index, 1);
            return true; // Indicate successful deletion
        }
        return false; // Indicate job not found
    }

}

// Sample job data
const jobs = [
    new JobsModel(1, "Coding Ninjas", "Tech", "SDE", "Bangalore", "400000", new Date(), 5, ["Java", "Python", "React", "NodeJS"]),
    new JobsModel(2, "Netflix", "NonTech", "Analyst", "UK", "700000", new Date(), 5, ["PowerBi", "Python", "SQL"]),
];
