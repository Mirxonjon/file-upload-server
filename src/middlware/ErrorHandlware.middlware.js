export const  errorHandler = (err , req , res , next) =>{
    let status = err.status || 500
    let message = err.message || 'Internal server error'
    return res.status(status).json({
        message
    })

}