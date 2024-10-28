const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

function connectToMongoDB() {
  return mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
}


module.exports = connectToMongoDB;
