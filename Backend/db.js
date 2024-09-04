const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://parasverma7454:7454@cluster0.4gjvz.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
