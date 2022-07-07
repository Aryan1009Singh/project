import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
    roll: Number,
    price: Number,
    description: String,
});

export default mongoose.model("items", itemSchema);
