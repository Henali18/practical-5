const mongoose = require("mongoose");

const sSchema = mongoose.Schema({
    sellerid : String,
    name : String,
    price : String,    
    productid : [String]
});
const sellerModel = mongoose.model("seller",sSchema,"seller");
module.exports = sellerModel;