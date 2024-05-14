export default class JobsModel{
    constructor(name,profile,role,location,salary,skills){
        this.name= name;
        this.profile=profile;
        this.role=role;
        this.location=location;
        this.salary=salary;
        this.skills=skills;
    }
    static getJobs(){
        return jobs;
    }
}
const jobs=[
    new JobsModel("Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    new JobsModel("GO Digit","Tech","Full-stack Engineer","J&K","9 - 11 Lpa",["JavaScript","React","NodeJS"]),
    new JobsModel("JusPay","XYZ","XYZ XYZ","XYZ","5 Lpa",["XYZ","XYZ","XYZ","XYZ"]),
    new JobsModel("Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    new JobsModel("GO Digit","Tech","Full-stack Engineer","J&K","9 - 11 Lpa",["JavaScript","React","NodeJS"]),
    new JobsModel("JusPay","XYZ","XYZ XYZ","XYZ","5 Lpa",["XYZ","XYZ","XYZ","XYZ"]),
    new JobsModel("Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    
   
   
    
]