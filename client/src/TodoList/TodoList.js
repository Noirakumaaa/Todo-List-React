import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionTodoList } from "../redux/action";

function TodoList(props) {
  const [TodoListItems, setTodoItems] = useState([]);
  const [itemView, setItemView] = useState(true);
  const [todoForm, setTodoForm] = useState({
    todo_item: "",
    todo_item_note: "",
    status: "ongoing",
  });

  useEffect(() => {
    props.getTodoList();

    if (props.todoItems) {
      setTodoItems(props.todoItems);
    }
    
  }, [props.todoItems,itemView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoForm);
    props.postTodoList(todoForm);
    props.getTodoList();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleDone = (id) => {

    const itemToUpdate = TodoListItems.find((item) => item._id === id);

    if (itemToUpdate) {
      const updatedItem = { ...itemToUpdate, status: "Finished" };

      props.editTodoItem(updatedItem);
      props.getTodoList()
    } else {
      console.log("Item not found");
    }
  };

  const handleOngoing = () => {
    setItemView(true);
  };

  const handleFinished = () => {
    setItemView(false);
  };

  return (
    <div className="todolist-wrapper">
      <div className="todolist-addsection">
  <h2 className="todolist-title">Todo List</h2>
  <div className="todolist-indicator">
    <span
      className={`indicator ${itemView ? "ongoing" : "finished"}`}
    >
      {itemView ? "Viewing: Ongoing Items" : "Viewing: Finished Items"}
    </span>
  </div>
  <form onSubmit={handleSubmit}>
    <label>Todo Item</label>
    <input
      type="text"
      name="todo_item"
      placeholder="Todo Item Header"
      value={todoForm.todo_item}
      onChange={handleChange}
    />
    <label>Note</label>
    <input
      type="text"
      name="todo_item_note"
      placeholder="Todo Item Note"
      value={todoForm.todo_item_note}
      onChange={handleChange}
    />
    <button type="submit">Add Todo</button>
  </form>
  <div className="button-group">
    <button onClick={handleOngoing} className={itemView ? "active" : ""}>
      Ongoing Items
    </button>
    <button onClick={handleFinished} className={!itemView ? "active" : ""}>
      Finished Items
    </button>
  </div>
</div>

      <div className="todolist-container">
        {itemView
          ?TodoListItems.filter((item) => item.status === "ongoing").map((element) => (
              <div className="todolist-item" key={element._id}>
                <h3>{element.todo_item}</h3>
                <span>
                  {element.todo_item_note > 0 ? element.todo_item_note : "None"}
                </span>
                <div>
                  <button onClick={() => handleDone(element._id)}>Done</button>
                  <button>Delete</button>
                </div>
              </div>
            ))
          : TodoListItems.filter((item) => item.status === "Finished").map((element) => (
              <div className="todolist-item" key={element._id}>
                <h3>{element.todo_item}</h3>
                <span>
                  {element.todo_item_note > 0 ? element.todo_item_note : "None"}
                </span>
                <div>
                  <button>Delete</button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  todoItems: state.todo.todoItems,
  loading: state.todo.loading,
  error: state.todo.error,
});

const mapDispatchToProps = {
  getTodoList: actionTodoList.getTodoList,
  postTodoList: actionTodoList.postTodoList,
  editTodoItem: actionTodoList.editTodoItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
