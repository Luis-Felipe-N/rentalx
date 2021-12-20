import { Specification } from "../../model/Specifications";
import { ICreateSpecificationsDTO, ISpecficationsRepository } from "../ISpecficationsRepository";

class SpecificationsRepository implements ISpecficationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = []
    }

    create({ name, description }: ICreateSpecificationsDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(speecifiation => specification.name === name)

        return specification
    }
}

export { SpecificationsRepository }