import express, { json, response } from 'express';
import { router } from './routes';

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.json({
        message: 'Oi'
    })
})

app.use(router)

app.listen(3000, ( ) => console.log('Server is running!'))