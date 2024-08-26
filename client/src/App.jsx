import TextInput from './inputForm';
import ItemTodo from './itemTodo';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState('');
  const [todoItems, setTodoItems] = useState([]); // State to store the list of todo items
  const [taskList, settaskList] = useState('');

  const handleResponse = (data) => {
    setResponseData(data);
    console.log(responseData);
  };

  const ongoingData = async () => {
    const existingID = new Set();
    const response = await axios.get('http://localhost:3000/api/get/todoItem');
    const items = [];

    if (taskList === 'true') {
      response.data.forEach(element => {
        if (element.ongoing === false && !existingID.has(element.input_number)) {
          items.push(<ItemTodo key={element.input_number} itemDescription={element.todo_item} itemId={element.input_number} status={element.ongoing}/>);
          existingID.add(element.input_number);
        }
      });
    } else {
      response.data.forEach(element => {
        if (element.ongoing === true && !existingID.has(element.input_number)) {
          items.push(<ItemTodo key={element.input_number} itemDescription={element.todo_item} itemId={element.input_number} status={element.ongoing}/>);
          existingID.add(element.input_number);
        }
      });
    }

    setTodoItems(items); // Update the state with the array of ItemTodo components
  };

  const buttonStatusOn = () => {
    settaskList('true');
  };

  const buttonStatusOff = () => {
    settaskList('false');
  };

  useEffect(() => {
    ongoingData(); // Fetch the data when the component mounts
  }, [taskList, todoItems]); // Trigger on taskList change
  
  return (
    <div className='container'>
      <div className='inputBox'>
        <TextInput onResponse={handleResponse}/> 
      </div>
      <div className='ItemTodo'>
        <div className='nav-task'>
          <div>
            <button onClick={buttonStatusOn} className='btn2'>Ongoing</button>
          </div>
          <div>
            <button onClick={buttonStatusOff} className='btn2'>Complete</button>
          </div>
        </div>
        <div className='task-list'>
          {todoItems} 
        </div>
      </div>
    </div>
  );
}

export default App;
