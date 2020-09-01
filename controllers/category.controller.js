let express = require("express"); 
let router = express.Router(); //Router Model
const categoryModel = require('../models/models.js'); //Category Model

// Get method for category search
router.get("/",  async (req, res) => {

    debugger;
    // Finding category table
    let result = await categoryModel.find();
      
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
