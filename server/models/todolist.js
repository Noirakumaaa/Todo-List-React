const mongoose = require('mongoose');
<<<<<<< HEAD
const autoIncrement = require('mongoose-sequence')(mongoose);

const todoItemSchema = new mongoose.Schema({
    input_number: {
        type: Number,
        unique: true
    },
=======


const todoItemSchema = new mongoose.Schema({

>>>>>>> d1ad33d (redo the structure of the program)
    todo_item :{
        type: String,
        required: true,
        unique: true
    },
<<<<<<< HEAD
    ongoing :{
        type: Boolean,
        default: false
    }

});

// Apply the auto-increment plugin to your schema
todoItemSchema.plugin(autoIncrement, { inc_field: 'input_number' });
=======
    todo_item_note :{
        type: String,
    },
    status :{
        type: String,
        default: false
    },

},{ timestamps: true });
>>>>>>> d1ad33d (redo the structure of the program)

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;
