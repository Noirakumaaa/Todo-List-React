import { TodoConstants } from "./constants";
import {serviceTodoList} from './service'



function getTodoList(){
    return (dispatch) => {
        dispatch(request());

        serviceTodoList.getTodoList()
            .then(data => {
                dispatch(success(data) );
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };


    function request(){
        return { type: TodoConstants.GET_ALL_TODO_ITEM};
    }
    function success(todoItems){
        return { type: TodoConstants.GET_ALL_TODO_ITEM_SUCCESS, todoItems};
    }
    function failure(){
        return { type: TodoConstants.GET_ALL_TODO_ITEM_FAILURE};
    }
}

function postTodoList(data){
    return (dispatch) => {
        dispatch(request());

        serviceTodoList.postTodoList(data)
            .then(data => {
                dispatch(success(data) );
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };


    function request(){
        return { type: TodoConstants.POST_TODO_ITEM};
    }
    function success(postItem){
        return { type: TodoConstants.POST_TODO_ITEM_SUCCESS, postItem};
    }
    function failure(){
        return { type: TodoConstants.POST_TODO_ITEM_FAILURE};
    }
}


function editTodoItem(data){
    return (dispatch) => {
        dispatch(request());

        serviceTodoList.editTodoItem(data)
            .then(data => {
                dispatch(success(data) );
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };


    function request(){
        return { type: TodoConstants.EDIT_TODO_ITEM};
    }
    function success(editItem){
        return { type: TodoConstants.EDIT_TODO_ITEM, editItem};
    }
    function failure(){
        return { type: TodoConstants.EDIT_TODO_ITEM};
    }
}



export const actionTodoList = {
    getTodoList,
    postTodoList,
    editTodoItem
}
