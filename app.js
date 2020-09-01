const express = require('express');
const bodyParser = require('body-parser');
require('./config/DbConfig.js');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
// Here I have set limit of Request
app.use(bodyParser.urlencoded({ limit: process.env.ReqSize, extended: true }));

// parse requests of content-type - application/json
//Here I have set limit of Request
app.use(bodyParser.json({ limit: process.env.ReqSize, extended: true }));

// Endpoint for saving and updting Vendor Details
let categoryController = require('./controllers/category.controller');
app.use('/category', categoryController);

module.exports = app