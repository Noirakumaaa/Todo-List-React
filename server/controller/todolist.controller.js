const express = require('express');
const router = express.Router();
const TodoService = require('../service/todolist.service.js');

router.get('/getall', getTodoItems)
router.post('/insert', postTodoItem)
router.put('/update', editTodoItem)

function getTodoItems(req, res) {
    TodoService.getTodoItems()
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}

function postTodoItem(req, res) {
    const data = req.body;
    console.log(data)
    TodoService.postTodoItem(data)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}
function editTodoItem(req, res) {
    const data = req.body;
    console.log(data)
    TodoService.editTodoItem(data)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json({ error: err.message }); 
        });
}


module.exports = router; 
