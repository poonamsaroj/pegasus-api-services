const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
require('./config/DbConfig.js');

// create express app
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

let corsOptions = {
    credentials: true,
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT']
}
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
// Here I have set limit of Request

// Endpoint for finding category table
let taskController = require('./controllers/task.controller');
app.use('/task', taskController);

module.exports = app