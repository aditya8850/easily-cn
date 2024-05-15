export default class RecruitersModel{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    static addRecruiter(recruiter){
        const newRecruiter = new RecruitersModel(recruiter.name, recruiter.email, recruiter.password);
        recruiters.push(newRecruiter);
          }
    static showRecruiters(){
        return recruiters;
    }
    
}
const recruiters=[
    new RecruitersModel("Raj","raj@gmail.com","raj123"),
]