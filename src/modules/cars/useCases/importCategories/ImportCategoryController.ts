import { Response, Request } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor( private importCatgoryUseCase: ImportCategoryUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const { file } = request
        return response.send()
    }
}

export { ImportCategoryController }