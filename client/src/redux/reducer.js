import { TodoConstants } from "./constants.js";

const initialState = {
  todoItems: [],
  postItem: "",
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoConstants.GET_ALL_TODO_ITEM:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TodoConstants.GET_ALL_TODO_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        todoItems: action.todoItems,
        error: null,
      };

    case TodoConstants.GET_ALL_TODO_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TodoConstants.POST_TODO_ITEM:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TodoConstants.POST_TODO_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        postItem: action.postItem,
      };
    case TodoConstants.POST_TODO_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case TodoConstants.EDIT_TODO_ITEM:
        return {
          ...state,
          loading: false,
          postItem: action.postItem,
        };
      case TodoConstants.EDIT_TODO_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          editItem: action.editItem,
        };
      case TodoConstants.EDIT_TODO_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  

    default:
      return state;
  }
};

export default reducer;

