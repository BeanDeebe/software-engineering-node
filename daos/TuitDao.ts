import Tuit from "../models/tuits/Tuit";
import TuitModel from "../mongoose/tuits/TuitModel";
import TuitDaoI from "../interfaces/TuitDaoI";

export default class TuitDao implements TuitDaoI {
    async createTuit(tid: string, tuit: Tuit): Promise<void> {
        return await TuitModel.create(tuit);
    }

    async deleteTuit(tid: string): Promise<any> {
        return await TuitModel.deleteOne({_id: tid});
    }

    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }

    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }

    async findTuitsByUser(uid: string): Promise<Tuit[]> {
        return await TuitModel.findById(uid);
    }

    async updateTuit(tid: string, tuit: Tuit): Promise<any>{
        return await TuitModel.updateOne(tuit);
    }


}