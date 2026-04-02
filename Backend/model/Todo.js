//load mongoose package
const mongoose = require("mongoose");

//schema creation
const todoSchema = mongoose.Schema({
    task : {type: String},
    status: {type:Boolean, default:false},
});


module.exports = mongoose.model("todolist", todoSchema);


() => res.json();
