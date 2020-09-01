const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const product = new Schema({
//     productName: String,
//     productType: String
// });
  
// Category model to mapping db values
const category = new Schema({
    _id: String,
    categoryName: String,
    product: Array
});
  
mongoose.model('category', category);
module.exports = mongoose.model('category');