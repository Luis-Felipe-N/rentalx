import express, { json, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.json({
        message: 'Oi'
    })
})

app.post('/', (request, response) => {
    // cosnoe
    response.json(request.body)
})

app.use("categories",categoriesRoutes)

app.listen(3000, ( ) => console.log('Server is running!'))