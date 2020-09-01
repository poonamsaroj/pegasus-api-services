let express = require("express");
let router = express.Router();
const categoryModel = require('../models/models.js');

router.get("/",  async (req, res) => {

    debugger;
    let result = await categoryModel.find();
      
    if(result != undefined){          
        return res.status(200).send(result);
    }
    else{
        return res.status(500).send({ "error" :  result["error"]  == undefined ? "Error" : result["error"] });
    }
}); 

module.exports = router;
