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
}
const jobs = [
    new JobsModel(1, "Coding Ninjas", "Tech", "SDE", "Bangalore", "4 - 7 Lpa", new Date(), 5, ["Java", "Python", "React", "NodeJS"]),
    new JobsModel(2, " Ninjas", "Tech", "SasdasdDE", "Banasfasfasfgalore", "4 - 7 Lpa", new Date(), 5, ["Javasda", "Pytashon", "Reasdact", "NoasddeJS"]),

]