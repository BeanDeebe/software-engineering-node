import mongoose, {Schema, SchemaTypes, Types} from "mongoose";


const TuitSchema = new mongoose.Schema ({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now()},
    postedBy: {type: SchemaTypes.ObjectId.toString(), ref:"UserModel"}
}, {collection: 'tuits'});

export default TuitSchema;