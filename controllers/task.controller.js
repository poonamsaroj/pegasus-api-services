let express = require("express"); 
let router = express.Router(); //Router Model
const model = require('../models/models.js'); //Category Model

// Get method for getting all list
router.get("/",  async (req, res) => {

    // Finding category table
    let result = await model.find();
      
    // If result is not empty throw search result with status code 200
    if(result != undefined){          
        return res.status(200).send(result);
    }
    // If result is empty throw error with status code 500
    else{
        return res.status(500).send({ "error" :  result["error"]  == undefined ? "Error" : result["error"] });
    }

}); 

// Get method for adding all list
router.post("/",  async (req, res) => {
    debugger;
    let insertObject = {
        title: req.body['title']
    }
    // Finding category table
    let result = await model.create(insertObject);
      
    // If result is not empty throw search result with status code 200
    if(result != undefined){          
        return res.status(200).send(result);
    }
    // If result is empty throw error with status code 500
    else{
        return res.status(500).send({ "error" :  result["error"]  == undefined ? "Error" : result["error"] });
    }

}); 

// Get method for deleting list
router.put("/",  async (req, res) => {
    debugger
    let updateObject = {
        title: req.body['title']
    }

    // Finding category table
    let result = await model.update();
      
    // If result is not empty throw search result with status code 200
    if(result != undefined){
        return res.status(200).send(result);
    }
    // If result is empty throw error with status code 500
    else{
        return res.status(500).send({ "error" :  result["error"]  == undefined ? "Error" : result["error"] });
    }

}); 

// Get method for deleting list
router.delete("/",  async (req, res) => {
    debugger
    let deleteObject = {
        title: req.body['title']
    }

    // Finding category table
    let result = await model.find();
      
    // If result is not empty throw search result with status code 200
    if(result != undefined){
        return res.status(200).send(result);
    }
    // If result is empty throw error with status code 500
    else{
        return res.status(500).send({ "error" :  result["error"]  == undefined ? "Error" : result["error"] });
    }

}); 

module.exports = router;
