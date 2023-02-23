import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const StudentSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim:true,
    },
    email :{
        type:String,
        required:[true, 'Please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'Please provide a valid email'
        },
        unique:true,
    },
    rollno :{
        type:String,
        required:[true, 'Please provide rollno'],
        minlength: 6,

    },
    
})

StudentSchema.methods.createJWT = function () {
    return jwt.sign({studentId:this._id},process.env.JWT_SECRET,{ 
        expiresIn: process.env.JWT_LIFETIME 
    })
    //console.log(this);
}

export default mongoose.model('Student',StudentSchema)