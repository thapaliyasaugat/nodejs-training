import express, { Express, Request, Response } from 'express';
import { Items } from './contracts/items';
import { mockItems } from './mock/mockItems';
import { DeleteById, findAll, findById, PutItem } from './service/items.service';
const app: Express = express();
import { student } from "./student"

app.get('/', (req: Request, res: Response) => {
    // res.json({ "message": "hello" })
    res.status(200).send("hello")
})



// app.get('/student', (req: Request, res: Response) => {
//     // res.json({ "message": "hello" })
//     res.status(200).json(student)
// })

//Item End Points

// Controller - take request and responds.
// repositary - db related job.
// service - multiple db related job

//get all the items
app.get('/items', async (req: Request, res: Response) => {
    try {
        const data: Array<Items> = await findAll();
        // console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})

//get item by id
app.get('/item/:id', async (req: Request, res: Response) => {
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

//Post
//middleware is required to read json
app.use(express.json())

app.post('/items', async (req: Request, res: Response) => {
    try {
        mockItems.push(req.body);
        res.status(200).json("data added sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})


//Delete
app.delete('/items/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = await DeleteById(id);
        res.status(200).json(data)
        // res.status(200).json("data deleted sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }

})


//Put
app.put('/items/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const data = await PutItem(id, req.body);
        res.status(200).json(data)
        // res.status(200).json("data updated sucessfully")
    } catch (error) {
        res.status(500).json({ error: "server error" })
    }
})



//start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("server started at 8000")
});