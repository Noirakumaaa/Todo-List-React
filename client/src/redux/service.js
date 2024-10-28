
function getTodoList(){
    const requestSetting = {
        method : "GET",
        header : {
            'Access-Control-Allow-Origin': '*',
        }
    }

    return fetch("http://localhost:3001/TodoList/getall", requestSetting)
    .then(handleResponse)

}


function postTodoList(data){
    const requestSetting = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    

    return fetch("http://localhost:3001/TodoList/insert", requestSetting)
    .then(handleResponse)

}

function editTodoItem(data){
    console.log(data)
    const requestSetting = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    

    return fetch("http://localhost:3001/TodoList/update", requestSetting)
    .then(handleResponse)

}


function handleResponse(response) {
    if (response.ok) {
        return response.json();  
    }
        return Promise.reject(new Error('Error: ' + response.statusText));  

}


export const serviceTodoList = {
    getTodoList,
    postTodoList,
    editTodoItem
};