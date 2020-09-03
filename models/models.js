const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
// Category model to mapping db values
const category = new Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    } ,
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now 
    }
});
  
mongoose.model('category', category);
module.exports = mongoose.model('category');