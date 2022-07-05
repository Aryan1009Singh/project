const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    roll: Number,
    email: String,
    contact: Number
});

modules.export = mongoose;