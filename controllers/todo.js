const Todo = require('../models/todo')

exports.getTodos = async (req,res)=>{
    try {
        const todos = await Todo.find();
        res.json(todos)
    } catch (error) {
        console.log(error)   
    }
}

exports.createTodo = async (req,res)=>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.json(todo);
    }catch(error){
        console.log(error);
    }
}

exports.getTodo = async (req,res)=>{
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo)
    } catch (error) {
        console.log(error);
    }
}

exports.updateTodo = async (req,res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        }).exec();
        res.json(todo);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteTodo = async (req,res)=>{
    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        res.json ({message:'We deleted it'})
    } catch (error) {
        console.log(error)
    }
}