const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getSingleTask,
    UpdateTask,
    deleteTask
} = require('../controllers/tasks')

// router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').get(getSingleTask).patch(UpdateTask).delete(deleteTask)
router.get('/',getAllTasks)
router.post('/',createTask)
router.get('/:id',getSingleTask)
router.patch('/:id',UpdateTask)
router.delete('/:id',deleteTask)

module.exports = router