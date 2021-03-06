import { response, Router } from 'express';
import { createCategoriesController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer'

const categoriesRoutes = Router()

const upload = multer({
    dest: "./tmp"
})

categoriesRoutes.post("/", ( request, response ) => {
    createCategoriesController.handle( request, response )
})

categoriesRoutes.get("/", (request, response) => {
    listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file") , (request, response) => {
    const { file } = request
    console.log( file )
    response.send()
})

export { categoriesRoutes };