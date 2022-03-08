import express, { Request, Response } from "express"
import { student } from "../student"

const studentRouter = express.Router();

studentRouter.get('/', (req: Request, res: Response) => {
    // res.json({ "message": "hello" })
    res.status(200).json(student)
})


export default studentRouter