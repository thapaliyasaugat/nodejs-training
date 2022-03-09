import express, { Express, Request, Response } from 'express';
import itemsRouter from './Router/items.router';
import studentRouter from './Router/students.router';
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
const PORT = process.env.PORT || 8000;
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

    public setupRoutes(): void {
        this.app.use("/items", itemsRouter);
        this.app.use("/students", studentRouter);
    }

    public start(): void {
        this.app.listen(PORT, () => {
            console.log("server started at 8000");
        })
    }
}
const server = new Server();
//start server
server.start();