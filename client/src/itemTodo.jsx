import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import axios from "axios";

function ItemTodo(props) {
    const [itemDes, setItemDes] = useState('');
    const [itemId, setitemId] = useState('');


    useEffect(() => {
        setItemDes(props.itemDescription);
        setitemId(props.itemId);
    }, [props.itemDescription,props.itemId]);


    const deleteData = async () =>{
        if(props.status === false){
            const response = await axios.put('http://localhost:3001/api/update/todoItem', {input_number: itemId})
            console.log("Item Deleted ", response);
        }else{
        const response = await axios.put('http://localhost:3001/api/delete/todoItem', {input_number: itemId})
        console.log("Item Deleted ", response);
        }
    }   


    return (
        <div className="itemDiv" id={itemId}>
            <div>
                <h3>{itemDes}</h3>
            </div>
            <div>
                <button onClick={deleteData} className='btn2'>Button</button>
            </div>
        </div>
    );
}

// Define prop types
ItemTodo.propTypes = {
    itemDescription: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
};

export default ItemTodo;
