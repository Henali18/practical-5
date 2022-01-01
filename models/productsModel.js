const mongoose = require("mongoose");

const pSchema = mongoose.Schema({
    productid : String,
    title : String,
    price : String,
    category : [String],
    companyid : String,
    sellerid : [String]
});
const productModel = mongoose.model("products",pSchema,"products");
module.exports = productModel;