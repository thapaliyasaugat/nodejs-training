import { Router } from "express";
import { Request, Response } from "express"
import { getConnection } from "typeorm";
import User from "../model/user.model"
class userController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes()
    }
    public initializeRoutes() {
        this.router.get('/check', this.check)
        this.router.get('/', this.getAllUser)
        this.router.post('/', this.addUser)
        this.router.delete('/', this.removeUser)
        this.router.get('/:id', this.getuser)
    }
    public getRouter(): Router {
        return this.router;
    }
    private async getAllUser(req: Request, res: Response) {
        try {
            const userRepo = getConnection('test').getRepository(User);
            const user = await userRepo.find();
            res.status(200).json(user)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
    private async check(req: Request, res: Response) {
        const sue = {
            name: "year",
            other: "other"
        }
        res.status(200).json(sue)
    }
    private async getuser(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const user = await getConnection('test').manager.findOne(User, id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json("server errror")
        }
    }

    private async removeUser(req: Request, res: Response) {
        await getConnection('test').manager.delete(User, { id: 2 })
        res.status(200).json("user deleted sucessfully")
    }
    private async addUser(req: Request, res: Response) {
        const user = new User();
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.age! = req.body.age;
        // console.log(user)

        try {
            console.log(user)
            const result = await getConnection('test').manager.save(user)
            console.log(result)
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json("Server Error")
        }
    }

}
export default userController