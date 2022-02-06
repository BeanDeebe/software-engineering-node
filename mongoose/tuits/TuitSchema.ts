import mongoose, {Schema, Types} from "mongoose";
import User from "../../models/users/User";
import ObjectId = module
import * as module from "module";



const TuitSchema = new mongoose.Schema ({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: ObjectId.toString(), ref:"UserModel"}
}, {collection: 'tuits'});

export default TuitSchema;