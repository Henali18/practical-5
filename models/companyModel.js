const mongoose = require("mongoose");

const cSchema = mongoose.Schema({
    companyid : String,
    name : String,
    productid : [String]
});
const companyModel = mongoose.model("company",cSchema,"company");
module.exports = companyModel;