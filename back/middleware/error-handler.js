import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err,req,res,next) =>{
    //console.log(err)
    console.log(err.message)
    const defaultError = {
        statusCode: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later'
    }
    //to provide empty value
    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        //defaultError.msg = err.message
        defaultError.msg = Object.values(err.errors)
        .map((item)=> item.message)
        .join(',')
    }
    //objet has to be unique 
    if(err.code && err.code === 11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
    }

    //res.status(defaultError.statusCode).json({ msg:err })// messages d'errors
    res.status(defaultError.statusCode).json({ msg: defaultError.msg }) //specifier le message d'erreur
};


export default errorHandlerMiddleware