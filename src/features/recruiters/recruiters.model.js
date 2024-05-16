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
    static authRecruiter(email,password){
        const recruiter = recruiters.find(recruiter => recruiter.email == email && recruiter.password == password);
        return recruiter
    }
}
const recruiters=[
    new RecruitersModel("Adi","kalsotraaditya98@gmail.com","1"),
]