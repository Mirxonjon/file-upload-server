import fs from 'fs'
import path, { resolve } from 'path'

const read = dir => JSON.parse(fs.readFileSync(path.normalize(`${process.cwd()}/src/model/${dir}`)))

const write = (dir , data) =>{
    return new Promise((resolve , reject) =>{
        fs.writeFile(path.normalize(`${process.cwd()}/src/model/${dir}`), JSON.stringify(data ,null ,4) ,
        err =>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

export {
    read , 
    write
}