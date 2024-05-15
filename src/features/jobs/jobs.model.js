export default class JobsModel{
    constructor(id,name,profile,role,location,salary,skills){
        this.id=id;
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
    static getById(id){
        const job= jobs.find((j)=>j.id== id);
        return job;
     }
}
const jobs=[
    new JobsModel(1,"Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    new JobsModel(2,"GO Digit","Tech","Full-stack Engineer","J&K","9 - 11 Lpa",["JavaScript","React","NodeJS"]),
    new JobsModel(3,"JusPay","XYZ","XYZ XYZ","XYZ","5 Lpa",["XYZ","XYZ","XYZ","XYZ"]),
    new JobsModel(4,"Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    new JobsModel(5,"GO Digit","Tech","Full-stack Engineer","J&K","9 - 11 Lpa",["JavaScript","React","NodeJS"]),
    new JobsModel(6,"JusPay","XYZ","XYZ XYZ","XYZ","5 Lpa",["XYZ","XYZ","XYZ","XYZ"]),
    new JobsModel(7,"Coding Ninjas","Tech","SDE","Bangalore","4 - 7 Lpa",["Java","Python","React","NodeJS"]),
    
   
   
    
]