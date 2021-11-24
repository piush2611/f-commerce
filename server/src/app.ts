import express, { Request, Response} from 'express';
import helmet from 'helmet'

const app = express()

// for securing app
app.use(helmet())

// to convert payload in json format
app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
    return res.send("Hello World")
})

app.listen(4000, () => {
    console.log('Application is listening on http://localhost:4000')
})
