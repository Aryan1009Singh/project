import mongoose from 'mongoose';

const tokSchema = mongoose.Schema({
    token: String,
    roll: Number
});

export default mongoose.model("login_sessions", tokSchema);