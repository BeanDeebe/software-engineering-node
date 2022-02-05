import mongoose from "mongoose";
import User from "../../models/users/User";

const TuitSchema = new mongoose.Schema ({
    tuit: {type: String, default:'', required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: String, default:''}
}, {collection: 'tuits'});

export default TuitSchema;