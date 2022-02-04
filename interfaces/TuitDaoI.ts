import Tuit from "../models/tuits/Tuit";

export default interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>;
    findTuitsByUser(uid: string): Promise<any>;
    findTuitById(tid: string): Promise<Tuit[]>;
    createTuit(tid: string, tuit: Tuit): Promise<any>;
    updateTuit(tid: string, tuit: Tuit): Promise<any>;
    deleteTuit(tid: string): Promise<any>;
}
