import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import TuitController from "./controllers/TuitController";
import UserController from "./controllers/UserController";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://beebed:hello123@cluster0.onmpj.mongodb.net/Tuiter?retryWrites=true")
    .then(() => {
        console.log('Connected!');
    })
    .catch((err) => {
        console.log('Connection Failed' + err.message);
    })
const app = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) =>
    res.send('Welcome!'));

app.use(bodyParser.json());
const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const PORT = 4000;
app.listen(process.env.PORT || PORT);