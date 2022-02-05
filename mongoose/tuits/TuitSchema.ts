import mongoose, {Schema} from "mongoose";
import User from "../../models/users/User";

const TuitSchema = new mongoose.Schema ({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: User, ref:"UserModel"}
}, {collection: 'tuits'});

export default TuitSchema;