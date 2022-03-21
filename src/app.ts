import express, { Express, Request, Response } from 'express';
import itemsRouter from './Router/items.router';
import studentRouter from './Router/students.router';
import dotenv from "dotenv"
import path from 'path';
import { createConnection } from 'typeorm';
import userController from './controller/user.controller';
import User from './model/user.model';
dotenv.config({ path: path.resolve(__dirname, './.env') });
// const app: Express = express();

// app.get('/', (req: Request, res: Response) => {
// res.json({ "message": "hello" })
// res.status(200).send("hello")
// })

//Item End Points

// Controller - take request and responds.
// repositary - db related job.
// service - multiple db related job

//get all the items


//Post
//middleware is required to read json
// app.use(express.json())

// app.use("/items", itemsRouter)
// app.use("/student", studentRouter)

//start server
const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// console.log("server started at 8000")
// });

//we can also do this way;

class Server {
    private app: Express;

    constructor() {
        this.app = express();
        this.setupconfig();
        this.setupRoutes();
    }
    public setupconfig(): void {
        this.app.use(express.json());
    }

    public async setupRoutes(): Promise<void> {
        await createConnection({
            name: "test",
            type: "mysql",
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: true,
            entities: [User]
        }).then(() => { console.log("database connected") }).catch(() => {
            console.log("error connecting db")
        })
        // mysql();
        // this.app.use("/items", itemsRouter);
        // this.app.use("/students", studentRouter);
        //user endpoints
        this.app.use('/users', new userController().getRouter())
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log(`server started at ${PORT}`);
        })
    }
}
const server = new Server();
//start server
server.start();