const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    productName: String,
    productType: String
});
  
const category = new Schema({
    _id: String,
    categoryName: String,
    product: Array
});
  
console.log(category)
mongoose.model('category', category);
module.exports = mongoose.model('category');