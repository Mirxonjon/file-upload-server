import { Router } from "express";

import uploadRouter from "./upload.routes.js";


const router = Router()

export default router
  .use([ uploadRouter])

