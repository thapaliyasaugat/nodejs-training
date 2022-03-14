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
        this.router.put('/put', this.check)
        this.router.delete('/delete', this.removeUser)
    }
    public getRouter(): Router {
        return this.router;
    }
    private getAllUser(req: Request, res: Response) {
        res.status(200).json({ user: 'Users' })
    }
    private check(req: Request, res: Response) {
        const result = "hello"
        res.status(200).json({ result: result })
    }
    private async getuser(req: Request, res: Response) {
        try {
            const user = await getConnection('test').manager.findByIds(User, [1, 7])
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json("server errror")
        }
    }

    private async removeUser(req: Request, res: Response) {

        const result = await getConnection('test').manager.remove({ id: 2 })
        res.status(200).json(result)
    }

    private async addUser(req: Request, res: Response) {
        const user = new User();
        user.firstname = "saugat";
        user.lastname = "thapaliya";
        user.age = 100;
        // console.log(user)

        const connection = await getConnection('test')
        // console.log(connection)
        try {
            const result = await connection.manager.save('user')
            console.log("user saved")
            res.status(200).json(result)
            res.status(200).json("ok")

        }
        catch (error) {
            res.status(500).json("Server Error")

        }
        connection.manager.save
    }

}
export default userController