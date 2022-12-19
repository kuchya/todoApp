const router = require('express').Router();
const TodoController = require('./../controllers/todo.controller');

router.post('/', TodoController.create);

router.get('/', TodoController.list);

module.exports = router;