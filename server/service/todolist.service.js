const TodoList = require('../models/todolist');


async function getTodoItems(){
    return await TodoList.find({});
}


async function postTodoItem(todoData){
    const todoItem = new TodoList(todoData);
    return await todoItem.save(); 
}

async function editTodoItem(todoData){
    console.log(todoData)
    return await TodoList.updateOne(
        {_id : todoData._id},
        {$set : todoData}
    )
}



module.exports = {
    getTodoItems,
    postTodoItem,
    editTodoItem,
};
