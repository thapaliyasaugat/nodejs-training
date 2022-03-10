import { Router } from "express";
import { Request, Response } from "express"
import { getConnection, Repository } from "typeorm";
import User from "../model/user.model"
class userController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get('/', this.getAllUser)
        this.router.post('/', this.addUser)
    }
    public getRouter(): Router {
        return this.router;
    }
    private getAllUser(req: Request, res: Response) {
        res.status(200).json({ user: 'Users' })
    }
    private async addUser(req: Request, res: Response) {
        const user = new User();
        user.firstname = "saugat";
        user.lastname = "thapaliya";
        user.age = 100;
        console.log(user)

        const connection = getConnection('test')
        // console.log(connection)
        // try {
        const result = await connection.manager.save('user')
        console.log("user saved")
        res.status(200).json(result)
        // res.status(200).json("ok")

        // }
        //  catch (error) {
        // res.status(500).json("Server Error")

        // }
        // connection.manager.save
    }

}
export default userController