import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}

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

export { CreateCategoryUseCase }