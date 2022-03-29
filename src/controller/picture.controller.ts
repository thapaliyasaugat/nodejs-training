import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { getConnection } from "typeorm";
import Picture from "../model/picture.model";
import User from "../model/user.model";

class PictureController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    public initializeRoutes() {
        this.router.post('/', this.postPicture)
        this.router.get('/all', this.allPictures) //get all the pictures
        this.router.get('/pictureid/:id', this.pictureByid) //get picture by pictureid
        this.router.get('/user/:userid', this.pictureByUserid)  //get picture by userid- all pictures
        this.router.delete('/:id', this.deleteById) //delete picture by id
        this.router.delete('/user/:userid', this.deleteByUserId) //delete picture by id
    }
    public getRouter() {
        return this.router;
    }
    public async allPictures(req: Request, res: Response) {
        console.log("ok")
        try {
            const pictureRepo = getConnection('test').getRepository(Picture);
            const pictures = await pictureRepo.find();
            res.status(200).json(pictures);
        } catch (error) {
            res.status(500).json("Server Error");
        }
    }
    public async postPicture(req: Request, res: Response) {
        const picture = new Picture();
        const id = req.body.userId;
        try {
            const user = await getConnection('test').manager.findOne(User, id)
            !user && res.status(404).json("Invalid user")
            picture.uri = req.body.uri;
            picture.user = user;


            const result = await getConnection('test').manager.save(picture)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    public async pictureByUserid(req: Request, res: Response) {
        try {
            const pictureData = getConnection('test').getRepository(Picture);
            const pictures = await pictureData.find({ where: { user: { id: 6 } } })
            res.status(200).json(pictures)
        } catch (error) {
            res.status(500).json("server error")
        }
    }
    public async pictureByid(req: Request, res: Response) {
        try {
            const pictureData = getConnection('test').getRepository(Picture);
            const picture = await pictureData.find({ id: req.params.id });
            res.status(200).json(picture)
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    public async deleteById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const pictureRepo = getConnection('test').getRepository(Picture);
            const picture = await pictureRepo.find({ id })
            // console.log("picture", picture)
            picture.length == 0 && res.status(404).json("picture not found")
            // await getConnection('test').manager.delete(Picture, { id });
            await pictureRepo.delete({ id })
            res.status(200).json("picture deleted sucrssfully")
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    public async deleteByUserId(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const userRepo = getConnection('test').getRepository(User);
            const user = await userRepo.find({ id })
            console.log(user)
            if (user.length == 0) res.status(404).json("user doesn't exists")
            else {
                await getConnection('test').manager.delete(Picture, { user: { id: req.params.userid } })
                res.status(200).json("all pictures deleted")
            }
        } catch (error) {
            res.status(500).json("server error")
        }
    }

}

export default PictureController