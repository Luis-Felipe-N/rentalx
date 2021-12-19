import { SpecificationsRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecificationsServices {
    constructor( private specificationsRepository: SpecificationsRepository) {

    }

    execute({ name, description}: IRequest) {

        const specificationsAlrearyExist = this.specificationsRepository.findByName( name )

        if ( specificationsAlrearyExist ) {
            throw new Error("Specification alreary exists!")
        }

        this.specificationsRepository.create({ name, description})
    }
}