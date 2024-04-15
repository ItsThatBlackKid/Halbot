import {configDotenv} from 'dotenv';
import express, {Request, Response} from 'express'
configDotenv();

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Hello world!'
    })
})

const PORT = process.env.PORT ?? 5000

app.listen(process.env.PORT ?? 5000, () => {
    console.log(`Server has started at http://localhost:${PORT}`)
})