import dotenv from "dotenv"
dotenv.config()
import  express  from "express";
import ejs from "ejs"
import path from "path"
import cors from 'cors'
import expressFileUpload from "express-fileupload"
const PORT = process.env.PORT || 9000
import routes from './routes/routes.js'
import { CustomErrorHandler } from "./errors/errorHandler.js";
import { errorHandler } from "./middlware/ErrorHandlware.middlware.js";

const app = express()
app.use(
    cors({
      origin: '*',
      credentials: true,
    }),
  );



// configuring template engine
app.set('view engine' , "ejs")


//middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use('/upload' , express.static(path.join(process.cwd(),'src','upload')))

app.use(expressFileUpload({
    limits: {
        fileSize: 50*1024*1024
    }
}))
// Controller

app.use(routes)


app.all('/*', (_,__ , next) => next( new CustomErrorHandler( 'path not found' , 404)))
app.use(errorHandler)
app.listen(PORT ,()=>{
    console.log('http://localhost:/' + PORT)
} )