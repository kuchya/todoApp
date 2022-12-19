const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task_name: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});

const TodoModel = mongoose.model('todo', TodoSchema);

module.exports = TodoModel;