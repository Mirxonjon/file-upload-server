import { Router } from "express";
import uploadfile from "../controller/fileUpload.controller.js";


const uploadRouter = Router()

export default uploadRouter 
    .post('/uploadfile/img' , uploadfile.POST_FILE)
