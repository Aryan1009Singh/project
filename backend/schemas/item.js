const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name: String,
    roll: Number,
    category: String,
    description: String
});

export default mongoose.model("items", itemSchema);