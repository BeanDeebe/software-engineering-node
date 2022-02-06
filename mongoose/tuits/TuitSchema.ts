import mongoose, {Schema, SchemaTypes, Types} from "mongoose";
import UserModel from "../users/UserModel";


const TuitSchema = new mongoose.Schema ({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: UserModel.name, ref:"UserModel"}
}, {collection: 'tuits'});

export default TuitSchema;