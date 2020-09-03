/**
 * @param mongoose - importing mongoose module for DB connection
 */
const mongoose = require('mongoose');
const db = mongoose.connection;

/**
 * @method mongoose.connect() - connecting to database
 */
var connectionString = "mongodb://localhost:27017/pegasusDb" 
mongoose.connect(connectionString);

 
/**
 * @event mongoose.connection.on() - To handle errors after initial connection was established, listen for error events on the connection.  
 */
db.on('error', () =>{
  console.error.bind(console, 'connection error:');
})

/**
 * @event mongoose.connection.once() - To handle successful connection is established.  
 */
db.once('open', () => {
  console.log("Connected to MongoDB database");
});

module.exports = { db };