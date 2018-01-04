const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:String,
    completed:{
         type: Boolean,
        default: false
        },
    created:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Todo',todoSchema);