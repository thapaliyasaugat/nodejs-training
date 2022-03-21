import { Request, Response, Router } from "express";
import { getConnection } from "typeorm";
import Picture from "../model/picture.model";

class PictureController {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    public initializeRoutes() {
        this.router.post('/', this.postPicture)
        this.router.get('/:id', this.pictureByid) //get picture by pictureid
        this.router.get('/user/:userid', this.pictureByUserid)  //get picture by userid- all pictures
        this.router.delete('/:id',) //delete picture by pictureid
        this.router.delete('/:id',) //delete all picture by userid
    }
    public getRouter() {
        return this.router;
    }
    public async postPicture(req: Request, res: Response) {
        const picture = new Picture();
        picture.uri = req.body.uri;
        picture.user = req.body.user;
        try {

            const result = await getConnection('test').manager.save(picture)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("server error")
        }
    }

    public async pictureByUserid(req: Request, res: Response) {
        try {
            const pictureData = getConnection('test').manager.getRepository(Picture);
            const pictures = await pictureData.find();
            res.status(200).json(pictures)
        } catch (error) {
            res.status(500).json("server error")
        }
    }
    public async pictureByid(req: Request, res: Response) {
        try {
            const pictureData = getConnection('test').manager.getRepository(Picture);
            const picture = await pictureData.find({ id: req.params.id });
            res.status(200).json(picture)
        } catch (error) {
            res.status(500).json("server error")
        }
    }


}

export default PictureController