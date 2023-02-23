import express from 'express'
const router =  express.Router()

import {
    createStudent,
    updateStudent,
    getAllStudents,
    deleteStudent
} from '../controllers/StudentController.js'

router.route('/').post(createStudent).get(getAllStudents)
// remember about :id
router.route('/:id').delete(deleteStudent).patch(updateStudent)

export default router
