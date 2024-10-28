const express = require('express');
const cors = require('cors');
const TodoController = require('./controller/todolist.controller.js')
const db = require('./config/db'); 
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/TodoList', TodoController)

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost"

db().then(() => {
    app.listen(PORT,HOST, () => {
        console.log(`Server running at http://${HOST}:${PORT}/`);
    });
});
