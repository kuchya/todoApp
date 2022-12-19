const TodoModel = require('./../models/todo.model');

module.exports = {
    create: (req, res, next) => {
        const data = req.body;
        const newTask = new TodoModel(data);
        newTask.created_at = Date.now();
        newTask.save();
        res.send({success: true, data: newTask});
        return;
    },
    list: async (req, res, next) => {
        const data = await TodoModel.find({});
        res.send(data);
        return;
    }
}