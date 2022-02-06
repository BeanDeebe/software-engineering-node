import mongoose, {Schema, SchemaTypes, Types} from "mongoose";
import UserModel from "../users/UserModel";
import Tuit from "../../models/tuits/Tuit";


const TuitSchema = new mongoose.Schema<Tuit> ({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: Schema.Types.ObjectId, ref:"UserModel"}
}, {collection: 'tuits'});

export default TuitSchema;