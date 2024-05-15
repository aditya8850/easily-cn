import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path"
import recruitersRouter from "../easily-cn/src/features/recruiters/recruiters.route.js"
import jobsRouter from "./src/features/jobs/jobs.router.js";
import bodyParser from "body-parser";
const app= express();
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
const ejsViewsPath= path.join(path.resolve(),"src","views");
app.set("views",ejsViewsPath);
app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/jobs',jobsRouter)
app.use('/recruiters',recruitersRouter)

app.listen(4000,()=>{
    console.log("Server listening");
});