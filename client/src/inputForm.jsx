    import { useState } from 'react';
    import axios from 'axios';
    import PropTypes from 'prop-types';


    function TextInput(props) {
    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/add/todoItem', { todo_item: inputValue });
            const data = JSON.stringify(response); // Access the .data property of the response
            console.log(data);
    
            props.onResponse(data); // Pass the data to the parent component
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h1>Todo List Application</h1>
        <label>
            Enter Task
        </label>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            alt='hello'
            />
        <button type="submit">Submit</button>
        </form>
    );
    }

    TextInput.propTypes = {
        onResponse: PropTypes.func.isRequired,
      };
    export default TextInput;
