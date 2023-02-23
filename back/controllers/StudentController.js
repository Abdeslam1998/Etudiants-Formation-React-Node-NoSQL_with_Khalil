import Student from "../models/Student.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError } from '../errors/index.js'


const createStudent = async (req,res) => {
    const {name, email, rollno} = req.body
    if(!name || !email || !rollno) {
        throw new BadRequestError('Please provide all values')
    }

    const StudentAlreadyExists = await Student.findOne({email})
    if(StudentAlreadyExists) {
        throw new BadRequestError('Email already in use')
    }


    const student = await Student.create({name, email, rollno})

    const token = student.createJWT()
    res.status(StatusCodes.OK).json({ student,token })
}

const getAllStudents = async (req,res) => {
    const student = await Student.find( {} ) //createdBy: req.user.userId
    res
      .status(StatusCodes.OK)
      .json({ student })
}

const updateStudent = async (req,res) => {
    const { id:studentId } = req.params
    const {name, email, rollno} = req.body

    if(!name || !email || !rollno) {
        throw new BadRequestError('Please provide all values')
    }

    const student = await Student.findOne({ _id:studentId })
    student.name = name
    student.email = email
    student.rollno = rollno
    if ( !student ){
        throw new NotFoundError(`No user with id : ${studentId}`)
    }

    const updateStudent = await Student.findOneAndUpdate({ _id:studentId},req.body,{
        new: true,
        runValidators: true,
    })

    res.status(StatusCodes.OK).json({ updateStudent })
}

const deleteStudent = async (req,res) => {
    const { id:studentId } = req.params

    const student = await Student.findOne({ _id:studentId })

    if ( !student ){
        throw new NotFoundError(`No user with id : ${studentId}`)
    }
    await student.remove()

    res.status(StatusCodes.OK).json({ msg: 'Success! Student removed' })
}


export { createStudent, deleteStudent, updateStudent, getAllStudents } 