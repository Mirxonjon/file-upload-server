
import { v4 } from 'uuid'
import path from 'path'
import { CustomErrorHandler } from '../errors/errorHandler.js'
export default {
    POST_FILE : async (req,res) => {
        try {
        const {originalname} =req.body
        const {buffer} = req.files

        const urll = v4() + path.extname(originalname)
        if(!buffer){
            return new CustomErrorHandler('rasm yuklanmadi' , 500)
        }
       await buffer.mv(path.join(process.cwd(),'src' , 'upload','imgs', urll), err => {
            if(err) new CustomErrorHandler('rasm yukalmadi');
        })
        res.send(urll)
    } catch (error) {
            return new CustomErrorHandler('Server error', 500); 
    }// data

    }
}