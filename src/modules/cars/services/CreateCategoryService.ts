import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description }: IRequest):void {
        const categoryAldearyExists = this.categoriesRepository.findByName( name )
        
        if  (categoryAldearyExists) {
            throw new Error("category already exists!")
        }
    
        this.categoriesRepository.create({
            name,
            description
        })
    }
}

export { CreateCategoryService }