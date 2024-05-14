import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path"
import recruitersRouter from "../easily-cn/src/features/recruiters/recruiters.route.js"
import jobsRouter from "./src/features/jobs/jobs.router.js";
const app= express();
app.use(expressEjsLayouts);
app.use(express.static(path.join(path.resolve(), 'public')));

app.set("view engine","ejs");
const ejsViewsPath= path.join(path.resolve(),"src","views");
app.set("views",ejsViewsPath);
app.use('/jobs',jobsRouter)
app.use('/',recruitersRouter)
app.use(express.static('src/views'),(req,res)=>{
        res.render("layout",{body:req.body})
    })
app.listen(4000,()=>{
    console.log("Server listening");
})