import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor( private specificationsRepository: SpecificationsRepository) { }

    execute({ name, description}: IRequest) {

        const specificationsAlrearyExist = this.specificationsRepository.findByName( name )

        if ( specificationsAlrearyExist ) {
            throw new Error("Specification alreary exists!")
        }

        this.specificationsRepository.create({ name, description})
    }
}

export { CreateSpecificationUseCase }