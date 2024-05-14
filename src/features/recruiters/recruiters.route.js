// import { ProductController } from "./product.controller.js";

import express from "express";
const recruitersRouter = express.Router();

recruitersRouter.get("/recruiters",(req,res)=>{
    res.send('recruiters page')
})

export default recruitersRouter;