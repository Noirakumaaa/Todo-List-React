const express = require('express');
const bodyParser = require('body-parser');
const mongooes = require('mongoose')
const TodoItem = require('./models/todolist');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const mongo_url = process.env.MongoApiKey;

const app = express();
app.use(cors({
    origin: 'https://todo-list-react-epdq.onrender.com/', // Your frontend domain
  }));
app.use(bodyParser.json()); // To parse JSON bodies
const port = 3001;

//app.use(express.static(path.join(__dirname, '../client')));

// Serve index.html for the root route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client', 'index.html'));
//});

// Serve static files from the 'dist' directory (where Vite builds the React app)
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.post('/api/add/todoItem', async (req,res)=>{
    const todo_item = req.body;
    try{
        const result = await TodoItem.create(todo_item);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error)
    }
})


app.get('/api/get/todoItem', async (req,res)=>{
    try {
        const todoItems = await TodoItem.find({});
        res.status(200).json(todoItems);
    }catch(error){
        res.status(500).json(error);
    }

})


app.put('/api/update/todoItem', async(req,res)=>{

    const input_number = req.body.input_number;
    console.log(typeof(input_number));
    try{
        const updateOngoing = await TodoItem.findOne({input_number:Number(input_number)})


        updateOngoing.ongoing = true;

        console.log(updateOngoing.ongoing + " Hello")

        const result = await updateOngoing.save();

        res.status(200).json(result)
    }catch(error){
        res.status(500).json(error)
    }
})

app.put('/api/delete/todoItem', async(req,res)=>{

    const input_number = req.body.input_number;
    console.log(typeof(input_number));
    try{
        const updateOngoing = await TodoItem.deleteOne({input_number:Number(input_number)})


        res.status(200).json(updateOngoing)
    }catch(error){
        res.status(500).json(error)
    }
})


mongooes.connect(mongo_url)
.then(()=>{
    console.log("Database is connected");
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
    
})

