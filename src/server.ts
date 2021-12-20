import express, { json, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.json({
        message: 'Oi'
    })
})

app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)

app.listen(3000, ( ) => console.log('Server is running!'))