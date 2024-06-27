const mongoose = require('mongoose');
// see the difference in both schema

const schema =  mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})
// creating connection to add to db or to take from db
const usermodel = mongoose.model("user", schema);

// exporting the schema
module.exports = usermodel;
