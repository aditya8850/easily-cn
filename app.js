import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path"
import recruitersRouter from "../easily-cn/src/features/recruiters/recruiters.route.js"
import jobsRouter from "./src/features/jobs/jobs.router.js";
import JobsModel from "./src/features/jobs/jobs.model.js";
import bodyParser from "body-parser";
import session from "express-session";
const app= express();
app.use("/app/", router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressEjsLayouts);
app.set("view engine","ejs");
const ejsViewsPath= path.join(path.resolve(),"src","views");
app.set("views",ejsViewsPath);
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(session({
    secret: 'your-secret-key', // Replace with a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Session expiration time in milliseconds
  }));
app.use('/jobs',jobsRouter)
app.use('/recruiters',recruitersRouter)
//setup-for search btn
app.get('/search',(req,res)=>{
    const query= req.query.q
    if (!query) {
        return res.status(400).send('Search query is required');
    }
    const searchResults = JobsModel.searchJobs(query);
    res.render('jobs', { jobs: searchResults, userAuth:null });
});

app.listen(3000,()=>{
    console.log("Server listening");
});

