import express, { Express, Request, Response } from 'express';
const app: Express = express();
import { student } from "./student"

app.get('/', (req: Request, res: Response) => {
    // res.json({ "message": "hello" })
    res.status(200).send("hello")
})



app.get('/student', (req: Request, res: Response) => {
    // res.json({ "message": "hello" })
    res.status(200).json(student)
})




//start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("server started at 8000")
});