import express, { Request, Response } from "express"
import { Items } from '../contracts/items';
import { mockItems } from '../mock/mockItems';
import { add, DeleteById, findAll, findById, PutItem } from '../service/items.service';

const itemsRouter = express.Router();
//get all items /items
itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const data: Array<Items> = await findAll();
        // console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})

//get item by id /items/:id
itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const item = await findById(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ error: "item not found" });

        }

    } catch (error) {
        res.status(500).json({ error: "server error" })

    }
})
//post /items
itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const body: Items = req.body;
        await add(body);
        res.status(200).json("data added sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})


//Delete /items/:id
itemsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = await DeleteById(id);
        !data && res.status(404).json("Items not found")
        res.status(200).json(data)
        // res.status(200).json("data deleted sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})


//Put /items/:id
itemsRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = await PutItem(id, req.body);
        !data && res.status(404).json("Items not found")
        res.status(200).json(data)
        // res.status(200).json("data updated sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }
})


export default itemsRouter