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
    static getJobs() {
        return jobs;
    }
    static getById(id) {
        const job = jobs.find((j) => j.id == id);
        return job;
    }
    addApplicantDb({ name, email, phone, file }) {
        let applicantData = { name, email, phone, file };
        this.applicants.push(applicantData);
        return this.applicants;
    }
    getTotalApplicants() {
        return this.applicants.length
    }
    static addNewJob(job) {
        const id = jobs.length + 1; // Generating a unique ID
        job.id = id; // Adding the ID to the job object
        // creating a new job instance
        job= new JobsModel(job.id,job.name,job.profile,job.role,job.location,job.salary,job.applyDate,job.openings,job.skills);
        jobs.push(job);
        console.log("jobs aer",jobs);
    }
}
const jobs = [
    new JobsModel(1, "Coding Ninjas", "Tech", "SDE", "Bangalore", "400000", new Date(), 5, ["Java", "Python", "React", "NodeJS"]),
    new JobsModel(2, " Netflix", "NonTech", "Analyst", "UK", "700000", new Date(), 5, ["PowerBi", "Python", "SQL"]),

]