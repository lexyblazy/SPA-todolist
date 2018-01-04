const router = require('express').Router();
const Todo = require('../models/todo');
const todoController = require('../controllers/todo')

router.route('/')
.get(todoController.getTodos)
.post(todoController.createTodo)

router.route('/:id')
.get(todoController.getTodo)
.put(todoController.updateTodo)
.delete(todoController.deleteTodo)


module.exports = router;